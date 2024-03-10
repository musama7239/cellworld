let baseUrl = import.meta.env.VITE_BASE_URL
async function  get(resource) {
    
        let request = await fetch(baseUrl + resource);
        let response = await request.json();
        return response
      
      
}

export {get}