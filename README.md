
# Project Nightswatch

As Nightswatch protected the wall from the wildings and white walkers, this project nightswatch protects our services from unwanted hits and used rangers and builders functions as middleware to proctect our services.

## Function References

#### Implementing Builders function

```
import {builders} from "@maaz4/nightswatch"
const token = builders(body, secret, {expiresIn: '1h'})
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `body` | `json` | **Required**. data to be sent |
| `secret` | `sting` | **Required**. secret key to be sent/undefined if you want auto generated |
| `options` | `json` | **Optional**. Others options such as expiry time |

#### Implementing Rangers function

```
import {rangers} from "@maaz4/nightswatch"
const isValid = await rangers(token);
console.log(isValid[0]); // This will log either true or false

```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `token`      | `string` | **Required**. token is valid or not |

#### Example Nightswatch function

```
import {helloNpm, builders, rangers} from "@maaz4/nightswatch"

console.log(helloNpm())
const body ={
  name:"maaz"
}
const token = builders(body, undefined, {expiresIn: '1h'})
console.log(token)
async function verifyToken(token) {
    const isValid = await rangers(token);
    console.log(isValid[0]); // This will log either true or false
  }
verifyToken(token) 

```

