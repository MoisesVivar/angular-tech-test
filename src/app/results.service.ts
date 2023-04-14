
export class ResultsService{
    public getResults(){
        var random_entries:number = Math.floor(Math.random()*16 + 5)
        var results = []
        for(let i=0; i<random_entries; i++){
            results.push({
                //For mocking pusposes, date is hardcoded to be between 1 Jan 2020 and the current date
                referenceDate: this.randomDate(new Date(2020, 0, 1), new Date()),  
                benchmark1: this.randomPercentage(),
                benchmark2: this.randomPercentage(),
            })
        }
        return results
    }

    private randomDate(start: Date, end: Date){
        let d: Date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        let day: String = d.toLocaleDateString("en-US",{day: 'numeric'})
        let month: String = d.toLocaleDateString("en-US",{month: 'short'})
        let year: String = d.toLocaleDateString("en-US",{year: 'numeric'})
        return  day + " " + month + " " + year
    }

    private randomPercentage(){
        return (Math.random()*101).toFixed(1) + "%"
    }
}