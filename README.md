# fetch-awesome
is a javascript library use to send tcp requests that add support to time out and retry to normal fetch use with react-native  
<br> this library support **timeout** and **retry** unlike other 
 
### how to install 
using npm:

```npm i fetch-awesome```<br>

###how to use 
we made two way to use this module first is ```fetch``` function and second is ```superFetch```
<br>
```fetch``` is made to use without almost touching your code 
but ```superFetch``` is made to have more abstraction and easier way to work

working with ```fetch```

```
//all you should do is adding here 
 import { fetch } from 'fetch-awesome';


//here is same like other normal fetch but you can add timeout and retries
 fetch('https://facebook.github.io/react-native/movies.json', { timeout: 10000, retries: 2 })
     .then((response) => response.json())
     .then((responseJson) => {
         alert(JSON.stringify(responseJson))
     })
     .catch((error) => {
         alert(error)
     });
```

how to use ```superFetch```

```
        superFetch('ServerAddress/PostRequest', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'param1': param,
            })
        }, (responseData) => {
            //data in js object no need to parse
        },
            function (error) {
        
            }
        );

```
###defaults 
- *timeout* default is 4000ms  
- *retry* default is 3 time with retry delay 1s(retry delay is not changeable yet) 

