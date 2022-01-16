
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

export function applyDomainsFilter(array,filterDomains){
    if(array.length==0){
        return array;
    }else{
        var arraycpy=array
        console.log(arraycpy,filterDomains)
        for(var i=0;i<filterDomains.length;i++){
            arraycpy=applyDomain(arraycpy,filterDomains[i]);
        }
        console.log(arraycpy)
        return arraycpy;
    }
}

function applyDomain(arr,filterDomain){
    console.log("arr coming here ",arr,"with filter domain ",filterDomain)
    if(arr.length==0){
        return arr;
    }else{
        return arr.filter((mentor)=>{
            return mentor.domains.includes(filterDomain)
        })
    }
}

export function applyLanguagesFilter(array,filterLanguages){
    if(array.length==0){
        return array;
    }else{
        var arraycpy=array
        for(var i=0;i<filterLanguages.length;i++){
            arraycpy=applyLanguage(arraycpy,filterLanguages[i]);
        }
        console.log(arraycpy)
        return arraycpy;
    }
}

function applyLanguage(arr,filterLanguage){
    if(arr.length==0){
        return arr;
    }else{
        return arr.filter((mentor)=>{
            return mentor.languages.includes(filterLanguage)
        })
    }
}

export function applyZeroMenteeFilter(array){
    if(array.length==0){
        return array;
    }else{
        var returnArray=array.filter((mentor)=>{
            return mentor.peerId!=undefined && mentor.peerId.length==0
        })
        return returnArray;
    }
}