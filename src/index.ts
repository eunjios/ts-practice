import crypto from 'crypto'; 

interface BlockShape {
	hash: string;			// 블록의 해시
	prevHash: string;	// 이전 블록의 해시
	height: number;		// 블록의 위치
	data: string;			// 블록이 보호할 데이터
}

class Block implements BlockShape {
	public hash: string;
	constructor(
		public prevHash: string,
		public height: number,
		public data: string,
	) {
		// hash는 calculateHash를 통해 계산됨
		this.hash = Block.calculateHash(prevHash, height, data);
	}
	static calculateHash(prevHash: string, height: number, data: string) {
		// crypto를 사용해서 hash 만들기 
		const toHash = `${prevHash}${height}${data}`;
		return crypto.createHash('sha256').update(toHash).digest('hex');
	}
}

class Blockchain {
	private blocks: Block[];
	constructor() {
		this.blocks = [];
	}
	private getPrevHash() {
		if (this.blocks.length === 0) return ''; 
		return this.blocks[this.blocks.length - 1].hash;
	}
	public addBlock(data: string) {
		const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
		this.blocks.push(newBlock);
	}
	public getBlocks() {
		return [...this.blocks]; // 해킹 방지
	}
}

const blockchain = new Blockchain();

blockchain.addBlock('First one');
blockchain.addBlock('Second one');
blockchain.addBlock('Third one');
blockchain.addBlock('Fourth one');
blockchain.getBlocks().push(new Block('fakehash', 999, 'HACKED'));

console.log(blockchain.getBlocks());