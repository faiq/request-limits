# request-limits

Limit the size of an incoming http request! 

If you don't want to wait for a request thats too large, this module will throw an error event if the size of the incoming http request is too large for you to handle

#Usage: 

```javascript
    var opts = {uri:'http://google.com'}
      , s = request(opts, function (e, r, b) { 
          //if the size is more than 255bytes an error event will happen  
        })
    limit(s, 255)
```

#Test: 
`npm t`
