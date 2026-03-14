const btn = document.getElementById("fetch-btn");
const output = document.getElementById("output");

const fetchUser = async() => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
         if(!response.ok){
            throw new error("request failed: "+response.status);
         }
         const user = await response.json();

         console.log(user);
         output.innerHTML = `
         <h2>${user.name}</h2>
         <p>Email: ${user.email}</p>
         <p>ity: ${user.address.city}</p>
         <p>Company: ${user.company.name}</p>
         `;
    } catch(error){
        output.innerHTML = `<p style="color:red">Error: ${error.message}</p> `;
        console.log(error);

    }
};

btn.addEventListener("click",fetchUser);

const fetchPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const first5 = posts.slice(0,5);

    console.log(first5);

    first5.forEach((post) => {
        console.log(post.id + ": " + post.title);
    });

};
fetchPosts();

const fetchWithStatus = async (userId) =>{
    output.innerHTML = `<p> Loading.....</p>`;
    try{
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        if(!response.ok) throw new Error("user not found");
        const user = await response.json();
        output.innerHTML = `
        <div style = "padding:16px; background:#f0fdf4; border-radius:8px; border:1px solid #86efac">
        <h2 style = "color:#16a34a">${user.name}</h2>
        <p> 📧 ${user.email}</p>
         <p>📍 ${user.address.city}</p>
        <p>🏢 ${user.company.name}</p>
        </div>
        `;
    }catch(error){
        output.innerHTML = `
        <div style = "padding:16px; background:#fef2f2; border-radius:8px; border:1px solid #fca5a5">
        <p style = "coloe:#dc2626">❌ ${error.message}</p>
        </div>
        `;
    }
};
btn.addEventListener("click", ()=> {
    const randomId = Math.floor(Math.random()*10)+1;
    fetchWithStatus(randomId);
});