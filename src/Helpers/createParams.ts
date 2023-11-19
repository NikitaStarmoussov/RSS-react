export default function getSearchQuery(addPage?:boolean, subtractPage?:boolean, newLimit?:number, query?:string) {
    const url = window.location.search
    const params = new URLSearchParams(url)
    let page = params.get('page')
    if(!page){
      page = "1"
    }
    if(addPage){
      params.set('page', (Number(page) + 1).toString())
    }
    if(subtractPage && Number(page)>1){
      params.set('page', (Number(page) - 1).toString())
    }
    if(newLimit){
      params.set('limit', newLimit.toString())
      params.set('page', '1')
    }
    if(query){
      params.set('q', query)
      params.set('page', '1')
    }
    return "?" + params.toString()
    
  }