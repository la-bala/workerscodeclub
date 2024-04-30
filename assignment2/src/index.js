const dictionary = {
response0: "Howdy partner! You made a get request! This is response type 0",
response1: "Greetings! You used the HTTP method GET! This is response type 1",
response2: "Why so nosy? There's nothing to GET here... This is response type 2",
response3: "Welcome to my Cloudflare worker! This is response type 3",
};

var src_default = {
  async fetch(request, env, ctx) {
    if(request.method == "POST") {
           return new Response('You made a post request!', {
               headers: {
                   'content-type': 'application/json',
               },
           });
       }
       else{
	let responseText = dictionary["response" + Math.floor(Math.random() * 4)];
           return new Response(responseText, {
               headers: {
                   'content-type': 'application/json',
               },
           });
       }
  }
};
export {
  src_default as default
};

