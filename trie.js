class TrieNode {
  constructor(char) {
    this.children = [];
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.isEnd = false;
    this.char = char;
  }
  markAsLeaf() {
    this.isEnd = true;
  }

  unMarkAsLeaf() {
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  // function to get the index of char
  getIndex(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  // function to insert a key in trie
  insert(word) {
    // null key is not allowed
    if (word === null) return;
    // keys are stored in lowercase
    word = word.toLowerCase();
    let curNode = this.root;
    let index = 0;
    for (let level = 0; level < word.length; level++) {
      index = this.getIndex(word[level]);
      if (curNode.children[index] === null) {
        curNode.children[index] = new TrieNode(word[level]);
        console.log(word[level] + ' inserted');
      }
      curNode = curNode.children[index];
    }
    // mark the end char as leaf node
    curNode.markAsLeaf();
    console.log(word + ' inserted');
  }

  // function to search a given word in trie
  search(word) {
    if (word === null) return false;
    word = word.toLowerCase();
    let curNode = this.root;
    let index = 0;
    for (let level = 0; level < word.length; level++) {
      index = this.getIndex(word[level]);
      if (curNode.children[index] === null) {
        return false;
      }
      curNode = curNode.children[index];
    }
    if (curNode !== null && curNode.isEnd) return true;
    return false;
  }

  hasNoChildren(curNode) {
    for (let i = 0; i < curNode.children.length; i++) {
      if (curNode.children[i] !== null) {
        return false;
      }
    }
    return true;
  }

  deleteHelper(word, curNode, length, level) {
    let deletedSelf = false;
    if (curNode === null) {
      console.log('word does not exist');
      return deletedSelf;
    }
    // base case: if we have reached at the last char of the word
    if (level === length) {
      if (this.hasNoChildren(curNode)) {
        curNode = null;
        deletedSelf = true;
      } else {
        curNode.unMarkAsLeaf();
        deletedSelf = false;
      }
    } else {
      let childNode = curNode.children[this.getIndex(word[level])];
      let childDeleted = this.deleteHelper(word, childNode, length, level + 1);
      if (childDeleted) {
        curNode.children[this.getIndex(word[level])] = null;
        if (curNode.isEnd) {
          deletedSelf = false;
        } else if (this.hasNoChildren(curNode) === false) {
          deletedSelf = false;
        } else {
          curNode = null;
          deletedSelf = true;
        }
      } else {
        deletedSelf = false;
      }
    }
    return deletedSelf;
  }

  delete(word) {
    if (this.root === null || word === null) {
      console.log('None word or empty trie error');
      return;
    }

    this.deleteHelper(word, this.root, word.length, 0);
  }
}

let words = ['the', 'a', 'there', 'answer', 'any', 'by', 'bye', 'their', 'abc'];
let output = ['Not present in the trie', 'Present in the trie'];
let trie = new Trie();
console.log('Words to insert: ');
console.log(words);
//Construct Trie
for (let i = 0; i < words.length; i++) {
  trie.insert(words[i]);
}

//Search for different keys
if (trie.search('the') == true) console.log('the --- ' + output[1]);
else console.log('the --- ' + output[0]);

if (trie.search('these') == true) console.log('these --- ' + output[1]);
else console.log('these --- ' + output[0]);

if (trie.search('abc') == true) console.log('abc --- ' + output[1]);
else console.log('abc --- ' + output[0]);
