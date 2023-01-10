class HashTable {
  constructor(){
     this.questionsList = [];
  }

  putQuestion(id,question,answer){
     this.questionsList[id] = [question,answer];
  }

  getID(string){
   for(let x = 0; x < this.questionsList.length; x++){
      if(this.questionsList[x][0] == string){
         return x;
      }
   }
  }

  getQuestion(id){
     return this.questionsList[id][0];
  }

  getAnswer(id){
     return this.questionsList[id][1];
  }

  getLength(){
     return this.questionsList.length;
  }
}
