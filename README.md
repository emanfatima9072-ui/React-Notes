# React-Basics

React basics (first 15 videos) Roadmap React fundamentals: JSX, functional components, props, useState, useEffect, conditional rendering, and list rendering.
I will provide notes of every lecture here.
# 📘 React JS Roadmap (Lecture 1)

## Why React?
React ek JavaScript Library hai jo complex aur interactive User Interfaces (UI) ko easy tarike se build aur manage karne ke liye use hoti hai. Sirf React isliye seekhna hai kyunki ye large applications ko maintain karna asaan bana deti hai.

## React Kab Seekhna Chahiye?
React shuru karne se pehle JavaScript ki strong understanding honi chahiye.
Aapko ye concepts aane chahiye:
* Execution Context
* Functions
* DOM Manipulation
* Events
* Objects
* Variables
Agar JavaScript achi tarah samajh aa jaye tab React seekhna best hota hai.

## React Ki Zarurat Kyu Pari?
React se pehle bhi HTML, CSS aur JavaScript se websites banti thi.
Lekin jab applications complex hone lagi aur ek hi action se multiple UI parts update hone lage, tab code manage karna mushkil ho gaya.
React isi problem ko easy bana deta hai aur UI ko efficiently manage karta hai.

## React Ki History
Facebook ko "Ghost Message Problem" face hui thi.
User message read kar leta tha lekin notification har jagah update nahi hoti thi. JavaScript ki state aur DOM synchronize nahi ho rahe the.
Isi inconsistency ko solve karne ke liye React develop kiya gaya. Baad mein React ko Open Source kar diya gaya aur industry ne adopt kar liya.

## Learning Approach
Is series mein focus sirf theory par nahi hoga.
Learning flow:
* Small Projects
* Concepts
* Advanced Concepts
* Documentation
* Real World Projects

## Library vs Framework
### Library

* Sirf required features provide karti hai.
* Developer ko zyada freedom milti hai.
* React ek **Library** hai.
### Framework

* Rules aur structure pehle se define hote hain.
* Developer ko un rules follow karne padte hain.
  
##  React Core Concepts
React seekhte waqt ye concepts sabse important hain:
* State
* JSX
* Components
* Component Reusability
* Props
* Hooks (useState, useEffect)
Ye React ki foundation hain.

## React Ke Baad
React ke baad commonly ye technologies seekhi jati hain:
* React Router
* State Management
* Next.js
* Backend Integration
Ye React ka part nahi hain, lekin real-world React development ke liye important hain.
## Summary Of Lecture 

* React ek JavaScript Library hai.
* React complex UI ko manage karna easy banata hai.
* JavaScript strong hone ke baad React seekhna chahiye.
* React ki foundation State, JSX, Components, Props aur Hooks hain.
* Project-based learning React seekhne ka effective approach hai.
----------------------------------------------------------------------------------------------------------------------------------------------------------------

 # 📘Create React Projects (Lecture 2)
 
## React Project Banane Se Pehle
React project banane se pehle sirf ek cheez zaroori hai **Node.js**.
Node.js React nahi hai. Ye sirf environment provide karta hai jiski wajah se hum packages install kar sakte hain aur React project run kar sakte hain.
Agar Node.js install nahi hoga to React project create bhi nahi hoga.

## React Project Banane Ke Do Tarike
Is lecture mein React project banane ke do methods bataye gaye.

### 1. Create React App (CRA)
Ye React ka purana aur official method tha.
* Beginner friendly.
* Setup easy.
* Lekin build aur server comparatively slow hain.
Aaj kal naye projects ke liye ye recommend nahi kiya jata.

### 2. Vite
Vite modern build tool hai aur aaj React community mein sabse zyada use hota hai.
Iske advantages:
* Project bohot jaldi create hota hai.
* Development server fast start hota hai.
* Changes turant browser mein reflect ho jati hain.
* Overall performance CRA se better hai.

## React Project Banne Ke Baad
Project create hote hi bohot saari files aur folders nazar aate hain.
Shuru mein sab files yaad karne ki zarurat nahi.
Sirf un files ko samjho jin par roz kaam hoga.

## Important Folders

### src
Yahin application ka actual React code likha jata hai.
Har component aur logic mostly isi folder ke andar hoti hai.

### public
Is folder mein static files rakhi jati hain jo directly browser access kar sakta hai.

### node_modules
Yahan project ki sari installed packages hoti hain.
Is folder ko manually edit nahi karte.

### package.json
Ye project ka record hota hai.
Isme dependencies, scripts aur project ki basic information hoti hai.

## Documentation Ki Importance
* Latest information wahi milti hai.
* Har feature detail mein explain hota hai.
* Real projects mein documentation bohot use hoti hai.

## Learning Advice
* Har lecture ke baad  project banao.
* Commands ko khud run karo.
* Folder structure explore karo.

## Summary Of Lecture
* React project create karne ke liye Node.js required hai.
* Create React App purana method hai.
* Vite modern aur fast solution hai.
* `src` folder mein main React code likha jata hai.
* `package.json` project ki dependencies aur scripts manage karta hai.
* Official documentation React learning ka important part hai.
----------------------------------------------------------------------------------------------------------------------------------------------------------------

# 📘 Understand React Flow & Structure (Lecture 3)

## Lecture Goal
React browser mein kaise load hota hai, application screen par kaise render hoti hai, aur Create React App aur Vite ke flow mein asal difference kya hai.

## Folder Structure Ki Understanding
React project mein bohot saare folders aur files hoti hain, lekin shuru mein sab yaad karne ki zarurat nahi.
Sabse important folders:
* src → Jahan application ka main React code likha jata hai.
* public → Static files aur `index.html`.
* node_modules → Project ki sari installed libraries.

## index.html Ka Role
React application mein sirf ek HTML page hota hai.
Us page ke andar ek empty element hota hai:
```html
<div id="root"></div>
```
React isi element ke andar apni puri application render karta hai.
Isi wajah se React ko Single Page Application (SPA) kaha jata hai.

## React Ka Flow
Application run hone ke baad React ka flow kuch is tarah hota hai:
1. index.html load hoti hai.
2. React root element ko select karta hai.
3. ReactDOM.createRoot() us element ka reference leta hai.
4. render() method App component ko render karti hai.
5. Browser mein puri application display ho jati hai.

## React DOM & Virtual DOM
Browser ka apna DOM hota hai.
React uske sath directly kaam nahi karta.
Sabse pehle React apna Virtual DOM banata hai.
Phir usay Original DOM se compare karta hai aur sirf wahi changes update karta hai jahan zarurat ho.
Isi wajah se React fast aur efficient hai.

## Create React App vs Vite
Dono React project banate hain, lekin unka setup thoda different hota hai.

### Create React App
* React scripts automatically background mein load hoti hain.
* index.js application ka entry point hota hai.

### Vite
* main.jsx ko index.html mein direct load kiya jata hai.
* Setup lightweight aur fast hota hai.
Flow dono ka almost same hota hai.

## React Components
React mein Component ek normal JavaScript function hota hai.
1.Component JSX return karta hai.
2.React us JSX ko browser mein render karta hai.
3.Components ko export karke dusri files mein reuse kiya ja sakta hai.
4.Isi reusability ki wajah se React applications ko manage karna easy ho jata hai.

##  Component Rules
Component banate waqt kuch conventions follow karni chahiye:
* Component ka naam Capital Letter se start karein.
* Agar file JSX return karti hai to .jsx extension use karna better practice hai (especially Vite mein).
* Ek component sirf ek parent element return kar sakta hai.
* Multiple elements return karne ke liye <></> (Fragment) ya kisi parent element ke andar wrap karein.
  
## Errors 
Lecture mein common errors bhi discuss ki gayin, jaise:
* Component ka naam small letter se likhna.
* File extension ka issue (.js vs .jsx).
* Component import/export bhool jana.
* Multiple elements ko bina parent ke return karna.
In errors ko samajhna React seekhne ka important hissa hai.

## Summary Of Lecture

* React index.html ke root element mein application render karta hai.
* createRoot() aur render() React ke basic flow ka hissa hain.
* React Virtual DOM ki help se efficient updates karta hai.
* CRA aur Vite ka concept same hai, sirf setup different hai.
* Component ek JavaScript function hota hai jo JSX return karta hai.
* Components ke naam Capital Letter se likhna aur unhein properly export/import karna best practice hai.
---------------------------------------------------------------------------------------------------------------------------------------------------------

# 📘 React Behind the Scenes (Lecture 4)

## Component Sirf Function Hota Hai
React Component asal mein JavaScript Function hota hai.

```jsx
function MyApp() {
    return (
        <div>
            <h1>Customer!</h1>
        </div>
    )
}
```
Isliye React component ko theoretically function ki tarah bhi call kar sakte hain.
```jsx
<MyApp />

// Same as

MyApp()
```
Note:Function ki tarah call ho jata hai, lekin React projects mein hamesha `<MyApp />` hi use karna chahiye. Yeh React ka standard convention hai aur optimization bhi isi ke liye hoti hai.

## JSX Kahan Se Aata Hai?
Jo syntax hum likhte hain

```jsx
<div>
    <h1>Hello</h1>
</div>
```
Ye browser ya JavaScript ko directly samajh nahi aata.
Behind the scenes Babel / Bundler (Vite) is JSX ko normal JavaScript mein convert karta hai.
Flow:
```text
JSX
      ↓
Babel / Bundler
      ↓
JavaScript Object
      ↓
React Render
      ↓
DOM
```

## JSX Easy Hai
React ko HTML nahi samajh aati.
React ko object structure chahiye.
Hum JSX isliye likhte hain kyun ke ye readable aur easy hoti hai.
Bundler automatically isko JavaScript object mein convert kar deta hai.

## Custom React
Pichli lecture mein humne khud React jaisa object banaya tha.
Example:

```js
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com"
    },
    children: "Visit Google"
}
```

Aur `customRender()` is object ko DOM mein convert karta tha.
Isse samajh aya ke React bhi internally object ke through kaam karta hai.

## Kya Hum Apna Object React.render() Mein De Sakte Hain?
Agar hum apna custom object directly render kar dein
```jsx
root.render(reactElement)
```
To error aati hai.
Reason:
Humne object apni marzi se banaya hai.
React ek specific object structure expect karta hai.
Uske property names aur internal fields different hote hain.

## React.createElement()
React khud object banane ke liye ek method deta hai.
```jsx
React.createElement()
```
Ye React ke required format mein object create karta hai.
Syntax
```jsx
React.createElement(
    type,
    props,
    children
)
```
### First Parameter → Tag

```jsx
"a"
"h1"
"p"
"div"
```
Example
```jsx
React.createElement("h1")
```

### Second Parameter → Props Object
Yahan saare HTML attributes aate hain.
```jsx
{
    href: "https://google.com",
    target: "_blank",
    title: "Google"
}
```
Agar koi attribute nahi hai
```jsx
null
```
ya
```jsx
{}
```
de sakte hain.

### Third Parameter → Children
Tag ke andar jo content dikhana hai.
```jsx
"Visit Google"
```
Complete Example
```jsx
const reactElement = React.createElement(
    "a",
    {
        href: "https://google.com",
        target: "_blank"
    },
    "Visit Google"
)
```
Phir
```jsx
root.render(reactElement)
```
Ab React is object ko samajh leta hai.

## JSX Behind The Scenes
Ye
```jsx
<a href="https://google.com">
    Visit Google
</a>
```
Actually convert hota hai
```jsx
React.createElement(
    "a",
    {
        href: "https://google.com"
    },
    "Visit Google"
)
```
Aur uske baad object banta hai.

## React.createElement Object Banata Hai
Ye HTML create nahi karta.
Ye ek JavaScript Object return karta hai.
Phir React us object ko Virtual DOM mein convert karta hai.
Uske baad Real DOM update hota hai.
Flow
```text
JSX
↓
React.createElement()
↓
React Element (Object)
↓
Virtual DOM
↓
Real DOM
```

## Variable Injection in JSX
JavaScript variable ko JSX mein show karne ke liye
```jsx
{}
```
use hota hai.
Example
```jsx
const username = "Custom project";
```
```jsx
<h1>{username}</h1>
```
Output

```text
Custom project
```

## Curly Braces `{}`
Curly braces ke andar JavaScript Expression likhte hain.
```jsx
{username}
```
React variable ki value render karta hai.

## Evaluated Expression
React curly braces ke andar sirf Evaluated Expression accept karta hai.
Matlab final value.
Example
```jsx
{username}
```
```jsx
{10 + 20}
```
```jsx
{isLoggedIn ? "Login" : "Logout"}
```
Ye sab valid hain.

## Kya Curly Braces Mein if Likha Ja Sakta Hai?
Nahi.
```jsx
{
    if(true){
        ...
    }
}
```
Reason

`if` statement value return nahi karta.
React ko final value chahiye.

## Expression Allowed Hain
Allowed
```jsx
{username}
```
```jsx
{10 + 20}
```
```jsx
{user.name}
```
```jsx
{isLogin ? "Yes" : "No"}
```

## Statements Allowed Nahi
No
```jsx
if
```
```jsx
for
```
```jsx
while
```
```jsx
switch
```
Ye statements hain.
Inki final value directly return nahi hoti.

## Variables Pehle Calculate Karo
Agar koi logic hai,
Pehle function ke andar calculate karo.
Phir JSX mein sirf variable use karo.
```jsx
const username = "Chai Aur Code";

return (
    <h1>{username}</h1>
)
```

## React Bahut Optimization Karta Hai
Hum sirf JSX likhte hain.
React internally:
* React Element banata hai.
* Virtual DOM banata hai.
* Tree create karta hai.
* Diffing Algorithm chalata hai.
* Sirf changed nodes update karta hai.
Isi wajah se React fast hai.

## React Open Source Hai

Agar dekhna ho React internally kaise kaam karta hai,
GitHub source code dekh sakte hain.

## Summary Of Lecture

* React Component sirf JavaScript Function hota hai.
* JSX ko Babel/Vite JavaScript mein convert karta hai.
* React internally JavaScript Object use karta hai.
* Custom object React render nahi kar sakta kyun ke uska format alag hota hai.
* `React.createElement()` React ke required structure wala object banata hai.
* JSX bhi internally `React.createElement()` mein convert hota hai.
* Curly braces `{}` JavaScript expressions inject karne ke liye hoti hain.
* Sirf evaluated expressions allowed hain, statements nahi.
* React Virtual DOM aur optimization ki wajah se fast rendering karta hai.

-----------------------------------------------------------------------------------------------------------------------------------------------------

# 📘 Why We Need Hooks (Lecture 5)

## Why We Need Hooks?
React mein normal JavaScript variable update ho jata hai.
```jsx
let counter = 15;
counter = counter + 1;
console.log(counter);
```
Console mein value update ho jati hai.
Lekin React ki UI automatically update nahi hoti.

## Actual Problem
Variable ki value change ho rahi hoti hai.
Lekin screen par purani value hi show hoti rehti hai.
Reason:
React ko pata hi nahi chalta ke variable update hua hai.
Is problem ko solve karne ke liye React Hooks provide karta hai.

## Counter Project
Is lecture mein humne ek simple Counter Project banaya.
Project mein:
- Counter Value
- Add Value Button
- Remove Value Button
Project ka main purpose counter banana nahi tha.
Iska goal ye samajhna tha ke React UI update ko kaise control karta hai.

## React UI Update
Normal JavaScript sirf variable update karti hai.
React sirf variable update nahi karta.
React UI ko bhi update karta hai.
Flow
```text
State Change
      ↓
React Detects Change
      ↓
Re-render
      ↓
Updated UI
```
## Introduction to Hooks

React kuch special functions provide karta hai.
In functions ko Hooks kehte hain.
Hooks React ko batate hain ke state change hui hai.
Phir React automatically UI ko update kar deta hai.
Kuch common hooks:
- useState
- useEffect
- useReducer
- useCallback
Har Hook ka apna specific kaam hota hai.
---

## useState Hook
State create karne ke liye React
```jsx
useState()
```
Hook provide karta hai.
Import
```jsx
import { useState } from "react";
```

## Default State
`useState()` ke andar jo value dete hain.
Wohi initial state hoti hai.
```jsx
useState(15)
```
Default value kuch bhi ho sakti hai.
- Number
- String
- Boolean
- Array
- Object
---

## useState Returns Two Values
`useState()` hamesha do values return karta hai.
```jsx
const [counter, setCounter] = useState(15);
```

### First Value
Current State
```jsx
counter
```

### Second Value
State Update Function
```jsx
setCounter
```

## State Update
State ko direct update nahi karte.
Wrong
```jsx
counter = counter + 1;
```
Correct
```jsx
setCounter(counter + 1);
```
React ko signal mil jata hai ke state change hui hai.
Phir React automatically UI update kar deta hai.

## Increment
Counter increase karne ke liye
```jsx
setCounter(counter + 1);
```

## Decrement
Counter decrease karne ke liye
```jsx
setCounter(counter - 1);
```

## Event Handling
Button click par function ka reference pass karte hain.
```jsx
<button onClick={addValue}>
```
Direct function call nahi karte.
```jsx
<button onClick={addValue()}>
```
Ye galat hai.
Function sirf button click hone par execute hona chahiye.

## Naming Convention
Variable ka naam kuch bhi ho sakta hai.
```jsx
const [value, setValue] = useState(0);
```
Lekin React mein convention hota hai.
```text
stateName
setStateName
```
Example
```jsx
const [counter, setCounter] = useState(0);
```

## Summary Of Lecture

- Normal variable update hota hai, lekin React UI update nahi hoti.
- React UI updates ko Hooks ke through control karta hai.
- Hooks React ke special functions hote hain.
- `useState()` state create karne ke liye use hota hai.
- `useState()` do values return karta hai.
  - Current State
  - State Update Function
- State ko direct update nahi karte.
- State ko `setCounter()` jaise setter function se update karte hain.
- State change hote hi React automatically UI re-render kar deta hai.
- Counter Project se Hooks aur UI update ka concept samajh aata hai.
-------------------------------------------------------------------------------------------------------------------------------------------------

# 📘 Virtual DOM, Fiber & Reconciliation (Lecture 6)

## Goal :
Ye lecture mostly theory based ta.
Iska main purpose React ke behind-the-scenes concepts samajhna hai.
Ye concepts interviews aur React ki internal working samajhne ke liye important hain.

## createRoot() Ka Role
React application start hote hi
```jsx
createRoot()
```
browser ke root element ka reference leta hai aur React ka rendering process start karta hai.
Behind the scenes React apna internal tree maintain karta hai jiske through UI updates ko manage karta hai.

## Virtual DOM
Virtual DOM React ka ek lightweight JavaScript representation hota hai jo Real DOM ki copy ki tarah kaam karta hai.
React directly Real DOM ko update nahi karta.
Flow:
```text
State Change
      ↓
Virtual DOM Update
      ↓
Old Virtual DOM vs New Virtual DOM Compare
      ↓
Only Changed Parts Update
      ↓
Real DOM Update
```
Is wajah se unnecessary DOM updates nahi hoti aur performance improve hoti hai.

## Real DOM vs Virtual DOM

### Real DOM
- Browser ka actual DOM hota hai.
- Update expensive hoti hai.
- Har change browser ko render karna padta hai.

### Virtual DOM
- JavaScript object ki form mein hota hai.
- React pehle isi ko update karta hai.
- Sirf changed elements Real DOM mein update hote hain.

## Reconciliation
Reconciliation React ki algorithm hai jo Old Virtual DOM aur New Virtual DOM ko compare karti hai.
Ye decide karti hai:
- Kis element mein change hua hai.
- Kis element ko update karna hai.
- Kis element ko remove ya replace karna hai.
React sirf required updates Real DOM mein apply karta hai.

## Diffing Algorithm
Reconciliation ke andar React Diffing Algorithm use karta hai.
Ye do trees compare karti hai.
```text
Old Tree
     ↓ Compare
New Tree
     ↓
Find Differences
     ↓
Update Only Changed Nodes
```
Is process ki wajah se React fast rendering provide karta hai.

## Fiber
Fiber React ka modern reconciliation engine (algorithm) hai.
Pehle React synchronous rendering use karta tha.
Fiber ke baad React rendering ko better tarike se manage karta hai.
Fiber ke main goals:
- Rendering ko pause kar sakta hai.
- Resume kar sakta hai.
- Cancel kar sakta hai.
- Different updates ko priority de sakta hai.
Isse UI zyada responsive rehti hai.

## Incremental Rendering
Fiber rendering ko chhote chhote tasks mein divide karta hai.
Instead of ek hi baar sab kuch render karne ke, React updates ko multiple frames mein perform kar sakta hai.
Isse application smooth feel hoti hai.

## Update Priority
Har update equally important nahi hoti.
Fiber different updates ko priority assign kar sakta hai.
Example:
- User click → High Priority
- Background data update → Low Priority
High priority updates pehle complete hoti hain.

## Abort & Resume Updates
Agar rendering ke darmiyan koi naya aur important update aa jaye,
Fiber:
- Current work pause kar sakta hai.
- Zarurat ho to purana work discard kar sakta hai.
- Latest update process kar sakta hai.
Isse unnecessary rendering avoid hoti hai.

## Keys & List Rendering
React list render karte waqt
```jsx
key
```
property use karta hai.
Keys ki wajah se React identify karta hai ke list ka kaunsa item change hua hai.
Key hamesha honi chahiye:
- Unique
- Stable
- Predictable
Example:
```jsx
users.map((user) => (
    <li key={user.id}>{user.name}</li>
))
```

## Rendering Optimization
React har state change par pura page dobara render nahi karta.
Ye:
- Virtual DOM compare karta hai.
- Differences find karta hai.
- Sirf changed nodes update karta hai.
Isi wajah se React efficient aur fast hai.

## Interview Points
Interview mein commonly ye questions pooche ja sakte hain:
- Virtual DOM kya hota hai?
- Reconciliation kya hai?
- Diffing Algorithm kya karti hai?
- Fiber kya hai?
- Fiber ke advantages kya hain?
- React mein key kyu use hoti hai?

## Summary Of Lecture

- `createRoot()` React rendering process start karta hai.
- Virtual DOM Real DOM ka lightweight JavaScript representation hai.
- React pehle Virtual DOM update karta hai.
- Reconciliation Old aur New Virtual DOM compare karti hai.
- Diffing Algorithm sirf changed nodes identify karti hai.
- Fiber React ka modern reconciliation engine hai.
- Fiber rendering ko pause, resume aur prioritize kar sakta hai.
- Different updates ki different priorities hoti hain.
- List rendering mein unique `key` performance improve karti hai.
- React unnecessary DOM updates avoid karke fast rendering provide karta hai.


