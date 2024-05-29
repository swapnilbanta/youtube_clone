Debouncing :
when you are doing very fast . It will skipping some of the events
when you are typing very fast . the difference bewteen key stroke is high
typing slow = 200ms
typing fast = 30m

performance 
-iphone pro max - 14 letter * 10000  =14000 
- with debouncing  = 3 API  call *1000  = 3000

-Debouncing   with 200ms
- if difference between  2 key strokes is <200ms -Decline the api call
> 200ms make an api call in it. 
> show the result


cache 🧮 
time cpmplexity tro search in array  = o(n)
time complexity tro search in object = o(1)

[i, ip, iph, iphone];
{
    i🧮 
    ip🧮 
    iph🧮 
    iphone🧮 

}

new Map(); searching inside the object

    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 '>

      DL- Get data live
      Ul- Update the ui

      Data(Live)
      ->web sockets (Ui)   Handskake  bidirectional live data   (server)
      ->Long polling (API polling)  (UI)  request to server (server)

