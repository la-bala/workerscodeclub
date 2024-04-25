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
           return new Response('You made a get request', {
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

