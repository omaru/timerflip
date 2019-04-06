import IllegalArgumentException from './IllegalArgumentException';

class RandomNumber{
    
    constructor(maxValue){
        if(maxValue > 100000){
            throw new IllegalArgumentException('Unexpected value found');
        }
        this.maxValue = maxValue;
        this.fromStart = 0;
        this.fromMiddle = this.truncate(maxValue/2);
     }
     truncate(value){
         return parseInt(value.toString().split('.')[0]);
     }
     getByMaxValue(){
        let startFrom = this.fromStart;
        let value =0;
        if(this.flip()){
            startFrom = this.fromMiddle;
        }

        do{
         for(let i = startFrom;i <= this.maxValue;i++){
            if(this.flip()){
                 value = i;
                  break;
           }
         }        
        }while(this.flip());
        console.debug('value found is',value);
        return value;
    }
    //TODO investigate proper use of 'static' key
    flip() {
        return Math.random() >= 0.5;
    }
}

export default RandomNumber;

