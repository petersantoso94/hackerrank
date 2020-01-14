function getMostVisited(n, sprints) {
    // Write your code here
    let arrSprint = new Array(n)
    arrSprint.fill(0)
    for(let i = 0;i<sprints.length-1;i++){
        let smallerIdx = i
        let biggerIdx = i+1
        if(sprints[smallerIdx] > sprints[biggerIdx]){
            smallerIdx = i+1
            biggerIdx = i
        }
        
        arrSprint[sprints[smallerIdx]-1]++
        if(sprints[biggerIdx] <= n-1){
        arrSprint[sprints[biggerIdx]]--}
        console.log(i+" "+arrSprint)
    }
    let result = []
    arrSprint.reduce((sum,curr)=>{
        result.push(sum+curr)
        return sum+curr
    },0)
    console.log(result)
    let max = 0
    let maxIdx = -1
    result.forEach((el,idx)=>{
        if(el>max){
            max = el
            maxIdx = idx
        }
    })
    return maxIdx+1
}

function longestPalindrome(n, s) {
    // Write your code here
    let maxLength = 0
    
    for (let i = 0; i < n; i++) {
        let lastIdx = s.split("").lastIndexOf(s[i])
        if(lastIdx !== -1 || lastIdx !== i){
            console.log("i",i)
            console.log("lastIdx",lastIdx)
            // there is palindrome
            let totalWordMatch = 0
            for (let j = lastIdx,k=i; j > i+Math.ceil((lastIdx - i)/2); j--,k++) {
                if(s[k] === s[j]){
                    console.log(s[k])
                    totalWordMatch++
                }
                
            }
            if(totalWordMatch > maxLength ) maxLength = totalWordMatch
        }
    }
    return maxLength*2+1
}