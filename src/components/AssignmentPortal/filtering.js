
export function applyBranchFilter(array,filterBranch){
    if(array.length==0){
        return array;
    }else{
        var returnArray=array.filter((mentor)=>{
            return mentor.branch==filterBranch
        })
        return returnArray;
        
    }

}

export function applyHostellerFilter(array){
    if(array.length==0){
        return array;
    }else{
        var returnArray=array.filter((mentor)=>{
            return mentor.hosteller==true
        })
        return returnArray;
    }
}