window.onload = () => {
  console.log("Successful page...");

  const body = document.querySelector("body")
  //  "http://localhost:3000/"
  const requestJson = async (url) =>{
    const request = await fetch(url) 
    const requestJson = request.json();
    return requestJson;
  }

 const test = async () =>{
   const testRequest = await requestJson("http://localhost:3000/")
   const names = testRequest.names;
   names.map((person) =>{
    const html = `<ul>
      <li>${person.name}</li>
      <li>${person.age}</li>
      <li>${person.city}</li>
    </ul>`
    body.innerHTML += html;
  })
 }
test();
};
