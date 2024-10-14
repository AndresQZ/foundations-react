//import { useSignal, useComputed , signal, computed } from "@preact/signals";
//import { signal, computed, effect } from '@preact/signals-react';

import React, { useState } from 'react';
import { signal, computed, effect } from '@preact/signals-react';



export const Signals = () => {
  return ( <>
    <CounterReact/>
    <CounterUsingSignal/>
  </>
    )
}


export const CounterReact = ()=> {
  const [count, setCounter]= useState(0)
  const double = count * 2

  console.log(`render Counter`)

  return ( <div>
      <p>{count} x 2 = {double}</p>
      <button onClick={() => setCounter(count +1)}>click me</button>
      <ChildComponent value={double}></ChildComponent>
    </div>
  );
}

const ChildComponent = (props)=> {
  const { value} =  props
    return ( <>
        <p> ChildSignalComponent </p>
        <p> { value }</p>
        </>
    )
}




export const signalCount = signal(0);
export let simpleValue = 0


export const CounterUsingSignal = ()=> {
  const todos = signal([{ name: Date.now() }]);
  const double = computed(() => signalCount.value * 2);

  console.log(`render CounterUsingSignal`)

  return (
    <div>
        <p> Counter using signals</p>
      <p>{signalCount} x 2 = {double}</p>
      <p> Simple value : { simpleValue} </p>
      <button onClick={() => signalCount.value++}>click me</button>
      <button onClick={() => simpleValue++}>click me</button>
      <ChildSignalComponent/>
    </div>
  );
}


const ChildSignalComponent = ()=> {
    return ( <>
        <p> ChildSignalComponent </p>
        <p> { signalCount }</p>
        </>
    )
}