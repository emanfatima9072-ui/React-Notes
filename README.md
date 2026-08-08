# React-Basics
This repository contains my notes from the first 15 React lectures.

Topics covered:
- JSX
- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- List Rendering
  
Each lecture contains:
- Concepts
- Examples
- Important Points
- Summary
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
*************************************************************************************************************************************************************

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
***************************************************************************************************************************************************************

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
***************************************************************************************************************************************************************

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
***********************************************************************************************************************************************************

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
*************************************************************************************************************************************************************

# 📘 Virtual DOM, Fiber & Reconciliation (Lecture 6)

## Lecture Goal :
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
  **********************************************************************************************************************************************************

  # 📘 React Props & Tailwind CSS (Lecture 7)

## What I Learned

In this lecture, I learned:
* How to configure Tailwind CSS in a React (Vite) project.
* What React Props are.
* How Props make components reusable.
* How to pass data from a Parent Component to a Child Component.
* How to receive and use Props inside a Component.
* How to pass different data types through Props.
* How to set default values for Props.
* How to create reusable Card Components.

## Tailwind CSS Setup

### Step 1: Create a React Project

```bash
npm create vite@latest
```

Select:
* React
* JavaScript

### Step 2: Move into Project

```bash
cd project-name
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run Project

```bash
npm run dev
```

### Step 5: Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
```

### Step 6: Generate Configuration Files

```bash
npx tailwindcss init -p
```

This creates:

* tailwind.config.js
* postcss.config.js

### Step 7: Configure Tailwind

Inside **tailwind.config.js**

```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

### Step 8: Add Tailwind Directives

Inside **index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 9: Test Tailwind

```jsx
<h1 className="bg-green-400 p-4 rounded-xl">
    Tailwind Test
</h1>
```

If the background becomes green, Tailwind is working correctly.

## Useful Tailwind Classes

### Background Color

```jsx
bg-green-400
```

### Padding

```jsx
p-4
```

### Rounded Corners

```jsx
rounded-xl
```

### Text Color

```jsx
text-white
```

### Margin Bottom

```jsx
mb-4
```

## React Props

### What are Props?

Props stand for **Properties**.

Props are used to send data from a Parent Component to a Child Component.

They make Components reusable.

## Without Props

```jsx
<Card />
<Card />
```

Both cards show exactly the same content.

## With Props

```jsx
<Card username="Chai Aur Code" />
<Card username="Hitesh" />
```

Now every Card can display different data.

## Receiving Props

```jsx
function Card(props) {

}
```

Props is an object.

Example:

```js
props = {
    username: "Chai Aur Code"
}
```

Access data like:

```jsx
props.username
```

## Props Destructuring

Instead of writing:

```jsx
props.username
```

We can destructure.

```jsx
function Card({ username }) {

}
```

Now simply use:

```jsx
{username}
```

## Using Props in JSX

```jsx
<h1>{username}</h1>
```

## Passing Multiple Props

```jsx
<Card
    username="Chai Aur Code"
    btnText="Visit Me"
/>
```

Receive them.

```jsx
function Card({ username, btnText }) {

}
```

Use them.

```jsx
<button>{btnText}</button>
```

## Passing Objects

```jsx
const myObj = {
    username: "Hitesh",
    age: 21
}

<Card myObj={myObj} />
```

Receive:

```jsx
props.myObj
```

or

```jsx
myObj.username
```

## Passing Arrays

```jsx
const arr = [1,2,3,4]

<Card arr={arr} />
```

Props can pass arrays without any issue.

## Default Props Value

Suppose Parent doesn't pass button text.

```jsx
<Card username="Hitesh" />
```

Provide a default value.

```jsx
function Card({
    username,
    btnText = "Visit Me"
}) {

}
```

Now if `btnText` is missing, React automatically uses:

```text
Visit Me
```

## Why Use Props?

Props help us:

* Reuse Components.
* Pass dynamic data.
* Reduce duplicate code.
* Keep Components flexible.
* Make UI easier to maintain.

## Flow of Props

```text
Parent Component
        │
        ▼
<Card username="Hitesh" />
        │
        ▼
Props Object
        │
        ▼
Card Component
        │
        ▼
Display Data on Screen
```

## Summary Of Lecture

* Props = Properties.
* Props send data from Parent to Child.
* Props are Read-Only.
* Props are received as an object.
* We can destructure Props.
* Props can pass:
  * String
  * Number
  * Boolean
  * Object
  * Array
  * Function
* Components become reusable with Props.
* Default values can be provided during destructuring.

*************************************************************************************************************************************************************

# 📘 React State Batching & Functional Updates (Lecture 8)

## Lecture Goal

Is lecture ka main purpose React ke ek important interview concept ko samajhna tha:
**Ek hi function ke andar multiple `setState()` calls karne par expected output kyu nahi aata?**
Saath hi React State Batching aur Functional Updates ka concept bhi explain kiya gaya.

## Interview Scenario

React interviews mein aksar ek simple Counter application banane ko kaha jata hai.

Project mein:

* Counter Value
* Increment Button
* Decrement Button

Basic counter banane ke baad interviewer usually ek follow-up question poochta hai.

Example:

```jsx
function addValue() {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
}
```

Question:
**Ek baar button click karne par counter kitna increase hoga?**

---

## Expected vs Actual Output

Agar initial value:

```text
15
```

To normally lagta hai output hoga:

```text
16
17
18
19
```

Ya final value:

```text
19
```

Lekin actual output hota hai:

```text
16
```

Ek hi click par sirf **1** value increase hoti hai.

---

## Aisa Kyu Hota Hai?

React state ko turant update nahi karta.

`setCounter()` call hote hi variable ki value immediately change nahi hoti.

React updates ko collect karta hai aur baad mein ek saath process karta hai.

Isi process ko **State Batching** kehte hain.

---

## State Batching

React multiple state updates ko ek batch mein combine karta hai.

Flow:

```text
Multiple setState()
        │
        ▼
React Collects Updates
        │
        ▼
Single Batch
        │
        ▼
UI Re-render
```

Is wajah se unnecessary re-rendering nahi hoti aur performance improve hoti hai.

---

## Problem with Normal Updates

Agar hum likhen:

```jsx
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
```

Har statement same old value use karti hai.

Example:

```text
counter = 15
```

Har line calculate karti hai:

```text
15 + 1
```

React ke paas final update sirf:

```text
16
```

jata hai.

Isliye output sirf:

```text
16
```

hota hai.

---

## Functional Update

Agar previous updated state chahiye ho to setter function ke andar callback pass karte hain.

Syntax:

```jsx
setCounter((prevCounter) => prevCounter + 1)
```

Yahan:

```jsx
prevCounter
```

React ki latest updated state hoti hai.

---

## Multiple Functional Updates

```jsx
setCounter((prevCounter) => prevCounter + 1)
setCounter((prevCounter) => prevCounter + 1)
setCounter((prevCounter) => prevCounter + 1)
setCounter((prevCounter) => prevCounter + 1)
```

Ab har callback previous updated value use karega.

Example:

```text
15
↓
16
↓
17
↓
18
↓
19
```

Final output:

```text
19
```

---

## Why Functional Update Works

Normal update:

```jsx
setCounter(counter + 1)
```

Current variable ki value use karta hai.

Functional update:

```jsx
setCounter((prevCounter) => prevCounter + 1)
```

React se latest updated state leta hai.

Isliye multiple updates correctly execute hoti hain.

---

## Callback Parameter

Callback ke andar jo parameter hota hai uska naam kuch bhi rakh sakte hain.

Example:

```jsx
setCounter((prevCounter) => prevCounter + 1)
```

Ya

```jsx
setCounter((count) => count + 1)
```

Ya

```jsx
setCounter((value) => value + 1)
```

Naam important nahi hota.

Important ye hai ke us parameter mein previous state milti hai.

---

## State Update Flow

### Normal Update

```text
counter = 15

setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)

        │
        ▼

Sabhi calls same value (15) use karti hain.

Final Result:

16
```

---

### Functional Update

```text
counter = 15

prevCounter = 15
        │
        ▼
16
        │
        ▼
17
        │
        ▼
18
        │
        ▼
19
```

Har callback latest updated value receive karta hai.

---

## Kab Functional Update Use Karni Chahiye?

Functional update tab use karni chahiye jab new state previous state par depend karti ho.

Examples:

* Counter Increment
* Counter Decrement
* Like Counter
* Quantity Increase
* Toggle Operations
* Multiple State Updates

---

## Interview Points

Interview mein commonly ye questions pooche ja sakte hain:

* React State Batching kya hoti hai?
* Multiple `setState()` calls ek hi update kyu karti hain?
* Functional Update kya hoti hai?
* `prevCounter` kya hota hai?
* Callback use karne ka kya benefit hai?
* Functional Update kab use karni chahiye?

---

## Summary Of Lecture

* React multiple state updates ko batch karta hai.
* `setCounter()` immediately state update nahi karta.
* Multiple normal updates same old value use karti hain.
* Isliye ek hi click par counter sirf ek baar update hota hai.
* Functional Update latest previous state provide karti hai.
* Callback syntax:

  ```jsx
  setCounter((prevCounter) => prevCounter + 1)
  ```
* Multiple Functional Updates correctly execute hoti hain.
* Jab new state previous state par depend kare to Functional Update use karni chahiye.
* Ye React ka important interview concept hai.
********************************************************************************************************************************************************

# Lecture 9 - Background Changer Project

## Goal
Is lecture ka goal React ke basic concepts ko ek chhote project me apply karna tha. Humne **Background Color Changer** banaya jisme button click karne par screen ka background color change hota hai.


## 📚 Concepts Revised

### 1. `useState` Practical Usage
- Background color ko state me store kiya.
- UI state ke according automatically update hoti hai.
```jsx
const [color, setColor] = useState("olive");
```

### 2. State ko UI me Use Karna
Inline style ke through state ko background color ke liye use kiya.

```jsx
<div
  style={{ backgroundColor: color }}
>
```
**Yaad rakho:**
- React me inline CSS object ki form me hoti hai.
- CSS properties camelCase me likhte hain.
Example:
```jsx
backgroundColor
fontSize
marginTop
```

### 3. Event Handling (`onClick`)
Har button ke click par state update ki.

```jsx
<button onClick={() => setColor("red")}>
  Red
</button>
```

## Callback Function Kyu?

Wrong
```jsx
onClick={setColor("red")}
```
Isme function render hote hi execute ho jata hai.
Correct
```jsx
onClick={() => setColor("red")}
```
Yahan `onClick` ko ek **function** milta hai jo click hone par execute hota hai.
**Reason:**
- `onClick` function expect karta hai.
- Agar parameter pass karna ho to callback function use karte hain.

## Tailwind CSS Practice

Project me Tailwind classes use ki gayi.
Common classes:
```text
w-full
h-screen
flex
justify-center
fixed
bottom-12
rounded-3xl
shadow-lg
gap-3
px-3
py-2
```

## Project Cleanup
New project banane ke baad:
- Unnecessary files remove ki.
- Default CSS clean ki.
- Default JSX remove ki.
- Sirf required code rakha.

## Learning

- State sirf data store nahi karti, UI ko bhi control karti hai.
- React me UI state ke according re-render hoti hai.
- Event handling ka basic concept clear hua.
- Callback function ka purpose samajh aaya.
- Tailwind CSS ki practical practice hui.
- Chhota project bhi concepts ko strong banata hai.

## Summary
Is lecture me humne React ka pehla practical UI project banaya jisme:
- `useState` use ki.
- Background color dynamically change kiya.
- `onClick` event handle kiya.
- Callback function ka use samjha.
- Inline styles aur Tailwind CSS practice ki.
- React state aur UI update ka real example dekha.

 *******************************************************************************************************************************************************

 # Lecture 10 - Password Generator Project (React Hooks)

##  What I Learned
### State Management
- Managed password settings using `useState`.
- Stored:
  - Password length
  - Allow numbers
  - Allow special characters
  - Generated password

### Controlled Inputs

- Used `value` and `onChange` for the range slider.
- Used checkboxes with previous state to toggle values.
```jsx
setNumberAllowed((prev) => !prev)
setCharAllowed((prev) => !prev)
```

### Password Generation
- Generated random passwords based on:
  - Selected length
  - Numbers option
  - Special characters option
- Used `Math.random()` and `charAt()` to pick random characters.

### useCallback
- Memoized the password generator function.
- Prevented unnecessary function recreation.
- Used dependency array correctly.

### useEffect
- Automatically generated a new password whenever:
  - Length changed
  - Number option changed
  - Character option changed

### useRef
- Stored a reference to the password input.
- Accessed the input directly without causing re-renders.

### Copy to Clipboard
- Copied the generated password using:

```js
window.navigator.clipboard.writeText(password)
```

- Selected the input text before copying:

```js
passwordRef.current?.select()
passwordRef.current?.setSelectionRange(0, 100)
```

## Debugging Learned

- Calling state updates directly during render causes an infinite render loop.
- Fixed password concatenation (`+=`) instead of overwriting (`=`).
- Avoided unnecessary dependencies in `useCallback`.
- Understood the difference between `useEffect` dependencies and `useCallback` dependencies.

## React Hooks Covered

- `useState`
- `useCallback`
- `useEffect`
- `useRef`

##  Project Outcome

Built a fully functional Password Generator that:
- Generates random passwords
- Supports custom length
- Includes numbers and special characters
- Auto-generates on option changes
- Copies password to clipboard
  ***********************************************************************************************************************************************************

# 📘 Lecture 11 - Currency Converter Project

## Lecture Goal
Is lecture ka goal React ke concepts ko use karke ek **Currency Converter** application banana tha. Is project mein humne API se live exchange rates fetch kiye, custom Hook banaya aur reusable components ka use kiya.

## Custom Hook
React mein jab same logic multiple jagah reuse karna ho to **Custom Hook** banaya jata hai.
Is project mein humne:

```js
useCurrencyInfo()
```
banaya jo selected currency ke exchange rates API se fetch karta hai.

### Benefits
- Code reusable ho jata hai.
- Logic component se alag ho jata hai.
- Components clean aur readable rehte hain.

## API Fetching
Exchange rates API se fetch kiye gaye.
Flow:

```text
Selected Currency
        ↓
fetch()
        ↓
API Response
        ↓
Store in State
        ↓
UI Update
```
`useEffect()` ki help se currency change hote hi latest rates automatically fetch hote hain.


## State Management
Project mein multiple states use hui.
```jsx
const [amount, setAmount] = useState(0)
const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")
const [convertedAmount, setConvertedAmount] = useState(0)
```

### States
- `amount` → Entered amount
- `from` → Source currency
- `to` → Target currency
- `convertedAmount` → Final converted value

## Reusable Components
Ek reusable component banaya:
```jsx
<InputBox />
```
Is component ko do baar use kiya.
- From Currency
- To Currency
Props ki help se different data pass kiya gaya.

## Props
Parent component se child component ko data pass kiya.
Example:
```jsx
<InputBox
    amount={amount}
    currencyOptions={options}
/>
```
Isse component reusable ban gaya.

## Currency Conversion
Convert button click hone par conversion perform hoti hai.
Formula:
```js
amount * currencyInfo[to]
```
Result state mein store hota hai aur UI automatically update ho jati hai.

## Swap Function
Swap button se dono selected currencies exchange ho jati hain.
Flow:
```text
USD → INR

↓

Swap

↓

INR → USD
```
Amount aur converted amount bhi swap kiye gaye.

## Controlled Components
Inputs React state ke through control kiye gaye.
```jsx
value={amount}
onChange={setAmount}
Is wajah se UI aur state hamesha synchronized rehte hain.
```

## Dynamic Dropdown
Available currencies dynamically show karne ke liye:
```js
Object.keys(currencyInfo)
```
use kiya gaya.
API se jitni currencies aati hain woh automatically dropdown mein render ho jati hain.

## Event Handling
Form submit hone par page reload na ho isliye:
```jsx
event.preventDefault()
```
use kiya.
Convert button click par conversion function call hota hai.

## React Concepts Covered
- Custom Hooks
- useState
- useEffect
- Props
- Controlled Components
- API Fetching
- Event Handling
- Component Reusability

## Project Flow
```text
User Input
      ↓
Select From Currency
      ↓
Select To Currency
      ↓
Click Convert
      ↓
Calculate Result
      ↓
Display Converted Amount
```

## Summary Of Lecture

- Custom Hook (`useCurrencyInfo`) bana kar API logic reuse ki.
- `fetch()` aur `useEffect()` se live exchange rates liye.
- `useState` se application ki state manage ki.
- Reusable `InputBox` component banaya.
- Props ki help se data pass kiya.
- Currency conversion formula implement kiya.
- Swap functionality add ki.
- Controlled inputs aur dynamic dropdown use kiye.
************************************************************************************************************************************************************

# 📘 React Router (Crash Course) (Lecture 12)

## What I Learned
In this lecture, I learned how to build a multi-page React application using **React Router**. I understood how routing works, how nested routes share a common layout, how to create dynamic URLs, and how to fetch data efficiently using **React Router Loaders** instead of `useEffect`.

## React Router
### Definition
React Router is a library that allows us to create **multiple pages (routes)** in a React Single Page Application (SPA) without reloading the browser.

## Layout & Nested Routing
### Definition
A **Layout** is a shared component that contains common UI (like Header and Footer). The changing page content is rendered inside `<Outlet />`.

### Key Points
- `Layout` keeps common UI in one place.
- `<Outlet />` renders the matching child route.
- Child routes are defined inside the parent route.

## Creating Routes
### Definition
Routes map a **URL path** to a React component.

### Two Routing Syntaxes
#### 1. Object-Based Syntax
- Uses an array of route objects.
- Each object contains `path`, `element`, and `children`.

#### 2. JSX Route Syntax
Uses:
- `createRoutesFromElements()`
- `<Route />`
This syntax is often easier to read because routes are written like JSX.

## Navigation
### Components Used
- `Link`
- `NavLink`

### NavLink
`NavLink` automatically applies an active style to the current page.

Example:
- `/` → Home is active.
- `/about` → About is active.

## Organizing Imports
Instead of writing long import paths everywhere:
```js
import Home from "./components/Home/Home";
import About from "./components/About/About";
```
We can create an **index.js** file that exports all components, making imports cleaner.

## Adding New Pages
Creating a new page requires:
1. Create the component.
2. Add its route.
3. Add a navigation link.
Example:
- Contact Page
- GitHub Page

## Dynamic Routes
### Definition
Dynamic routes allow URLs to contain variable values.
Example:
```text
/user/:userId
```
Here `userId` changes for every user.
Examples:
```text
/user/10
/user/50
/user/eman
```

## useParams()
### Definition
`useParams()` is a React Router Hook used to read dynamic values from the URL.
Example:
```js
const { userId } = useParams();
```
If URL is
```text
/user/100
```
Then

```js
userId = "100"
```

## Fetch API (Review)
The lecture also revised API fetching.
Basic Flow

```text
fetch()
   ↓
response.json()
   ↓
data
   ↓
setState()
   ↓
Display UI
```

Initially, data was fetched using:

- `useEffect()`
- `useState()`

---

## React Router Loader
### Definition
A **Loader** fetches data **before** the route is rendered.
Instead of:
```text
Component Loads
      ↓
useEffect Runs
      ↓
API Call
      ↓
Data Appears
```
Loader works like this:
```text
Navigate to Route
      ↓
Loader Runs
      ↓
API Fetches
      ↓
Component Renders with Data
```

## Loader
### Purpose
Used inside the route configuration to fetch data before rendering.

### Benefits
- Better user experience.
- Cleaner code.
- Less loading delay.
- Built-in optimization.

## useLoaderData()
### Definition
`useLoaderData()` receives the data returned by a Loader.
Instead of using:
```js
useEffect()
useState()
```

We simply write:

```js
const data = useLoaderData();
```

## GitHub API Practice
The lecture used the **GitHub Users API** to display:
- Avatar
- Followers

This demonstrated real-world API integration with React Router Loaders.

## Common Errors
- Route added but not registered.
- Forgot to import the component.
- Wrong file extension (`.js` vs `.jsx`).
- Route path mismatch.
- Wrong parameter name in `useParams()`.
- Forgot `<Outlet />` in Layout.
- Forgot `useLoaderData()` after adding a Loader.

## Project Review
During this lecture, the project evolved from a simple multi-page app into a more realistic React application.

### Features Added
- Shared Layout using `Outlet`
- Home, About, Contact pages
- Active Navigation with `NavLink`
- Dynamic User Route (`/user/:userId`)
- GitHub API Integration
- Data Fetching using `Loader`
- Data Access using `useLoaderData()`
- Cleaner Route Organization

## Summary Of Lecture
- React Router allows us to build multi-page SPAs without page reloads.
- `Layout` and `Outlet` help share common UI across pages.
- Routes can be created using Object-Based or JSX syntax.
- `NavLink` provides active navigation styling.
- `useParams()` reads dynamic values from the URL.
- Loaders fetch data before rendering the component.
- `useLoaderData()` directly accesses Loader data.
- GitHub API was used to practice Loader-based data fetching.
- The project became more structured, scalable, and reusable.
**************************************************************************************************************************************************************

# 📘 Lecture 13: React Context API

### React Context API Kya Hai?
React Context API ek built-in feature hai jo components ke beech **shared/global data** provide karne ke liye use hoti hai.
Context ki help se data ko har component ke through props mein pass karne ki zaroorat nahi hoti.

### Prop Drilling
Normally React mein data **parent se child** ko props ke through pass hota hai.
Agar data ko deeply nested component tak bhejna ho:
```text
App
 ↓ props
Dashboard
 ↓ props
Top
 ↓ props
Card
```
Beech ke components ko data ki zaroorat nahi hoti, phir bhi unko props receive karke aage pass karne padte hain.
Is problem ko **Prop Drilling** kehte hain.

### Context API
Context ek shared/global data provide karta hai jise nested components directly access kar sakte hain.
```text
App
 │
 └── Context Provider
       │
       ├── Dashboard
       ├── Top
       └── Card
             ↓
        Direct Context Access
```
Context API ka main purpose **shared data ko efficiently manage karna aur unnecessary prop drilling avoid karna** hai.

## Context API ka Basix Setup

### 1. Context Create Karna
Context ke liye separate folder/file bana sakte hain:
```text
src/
 └── context/
      └── UserContext.js
```
React se `createContext` use karte hain:
```js
import React from "react";

const UserContext = React.createContext();

export default UserContext;
```

### `createContext()`
`createContext()` ek **Context object** create karta hai.
```js
const UserContext = React.createContext();
```

### 2. Provider Banana
Context ko components tak provide karne ke liye **Provider** use hota hai.
```js
const UserContextProvider = ({ children }) => {

    return (
        <UserContext.Provider value={...}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
```

### Provider Ka Kaam
Provider ke andar jo components honge unko Context ki value ka access mil sakta hai.
```text
UserContextProvider
        │
        ├── Login
        ├── Profile
        └── Dashboard
```

### 3. `children`
`children` ek **special prop** hai.
Agar:
```jsx
<UserContextProvider>
    <Login />
    <Profile />
</UserContextProvider>
```
To `children` ke andar:
```text
Login
Profile
```
aa jayenge.
Isliye Provider mein:
```jsx
{children}
```
likhne se Provider ke andar wale components render ho jate hain.

### 4. Context Ki Value Dena
Provider ke andar `value` property se data provide karte hain.
```jsx
<UserContext.Provider value={{ user, setUser }}>
    {children}
</UserContext.Provider>
```
Yahan:
```text
user
setUser
```
dono Context ke through available hain.

### 5. State Ko Context Mein Rakhna
Context ke andar normally state rakhi ja sakti hai:
```js
const [user, setUser] = useState(null);
```
Phir:
```jsx
<UserContext.Provider value={{ user, setUser }}>
    {children}
</UserContext.Provider>
```
Ab components ko:
```text
user
setUser
```
ka access mil sakta hai.
---

### 6. Provider Ko App Ke Around Wrap Karna
Provider ko top level par wrap karte hain:
```jsx
<UserContextProvider>
    <App />
</UserContextProvider>
```
Ab `App` ke andar jitne components hain, wo Context access kar sakte hain.
```text
UserContextProvider
        │
       App
        │
   ┌────┴────┐
 Login     Profile
```

### 7. Context Data Access Karna
Component ke andar:
```js
import { useContext } from "react";
import UserContext from "../context/UserContext";
```
Phir:
```js
const { user, setUser } = useContext(UserContext);
```
Ab component directly:
```text
user
setUser
```
use kar sakta hai.

### `useContext()`
```js
useContext(UserContext)
```
context sa value access krta ha

## Projects In This Lecture
Is lecture mein **2 mini projects** ta:

### Project 1 — Mini Context App
Simple application jisme Context API use karke components ke beech data share karna hai.

### Purpose
* Context create karna.
* Provider banana.
* State ko Context mein rakhna.
* `useContext()` se data access karna.
* Prop Drilling avoid karna.

### Project 2 — Theme Switcher
Light/Dark theme switcher banana.

### Purpose
Context ke through theme ko globally manage karna.

Example:
```text
Theme Context
      │
      ├── Theme
      └── setTheme()
             │
       ┌─────┴─────┐
       │           │
     Button       UI
```
Button theme change karega aur Context ki wajah se required components ko updated theme mil jayegi.

## Summary Of Lecture
* **Prop Drilling** = data ko unnecessary intermediate components ke through pass karna.
* **Context API** = shared data ko directly required components tak provide karna.
* `createContext()` Context create karta hai.
* `Provider` Context ki value provide karta hai.
* `value` mein wo data hota hai jo share karna hai.
* `children` Provider ke andar wale components hote hain.
* `useContext()` Context ki value access karta hai.
* Context mein state bhi rakhi ja sakti hai.
* Context API React ka built-in feature hai.
* Context ka main purpose **shared/global data ko efficiently manage karna** hai.
* Context API React ke andar use hoti hai.

## Context API Flow
```text
createContext()
      ↓
Context Create
      ↓
Provider
      ↓
value = { data, functions }
      ↓
App ko Provider se wrap
      ↓
useContext()
      ↓
Component ko Direct Data Access
```
************************************************************************************************************************************************************

# 📘 Lecture 14: React Context API + Local Storage Todo App

### Context API
**Context API** React mein data aur functions ko multiple components tak directly provide karne ke liye use hoti hai, bina baar baar props pass kiye.
* `createContext()` → Context create karta hai.
* `Provider` → Data/functions components ko provide karta hai.
* `useContext()` → Kisi bhi child component mein Context ki values access karta hai.

### `useEffect`
`useEffect` ka use side effects perform karne ke liye hota hai.
Is project mein `useEffect` ko **Local Storage se Todos load** karne aur **Todos change hone par Local Storage update** karne ke liye use kiya.

### Local Storage
Browser mein data permanently store karne ke liye `localStorage` use hota hai.
```js
localStorage.setItem(key, value)
localStorage.getItem(key)
```
Local Storage sirf **string** store karta hai, isliye objects/arrays ke liye:
```js
JSON.stringify()
JSON.parse()
```
use kiye jate hain.

## Implementation in project :
### Todo Context
Ek `TodoContext` banaya jisme Todo ki sari functionality centralize ki:
* Add Todo
* Update Todo
* Delete Todo
* Toggle Todo Complete
* Todos ko Local Storage mein save karna
Components mein `useContext()` ke through ye functionality directly access ki.

### Todo Form
`TodoForm` component mein:
* `useState` se input value manage ki.
* `onChange` se input ko state ke saath connect kiya.
* `onSubmit` par new Todo add kiya.
* Submit ke baad input ko empty kiya.

### Todo Item
`TodoItem` component mein:
* Todo ko edit karna.
* Todo ko complete/incomplete toggle karna.
* Todo delete karna.
* `completed` value ke according UI change karna.
* Edit mode mein input ko update karna.

### Rendering Todos
Todos ko display karne ke liye `.map()` use kiya.
Har Todo ko uski **unique `id` ko `key`** ke taur par diya, taake React har item ko properly identify kar sake.
```js
todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
))
```
## Summary Of Lecture
* Context API se **prop drilling avoid** kar sakte hain.
* `useContext()` se Context ka data/functions access karte hain.
* `useEffect()` side effects ke liye use hota hai.
* `localStorage` sirf strings store karta hai.
* `JSON.stringify()` object/array ko string mein convert karta hai.
* `JSON.parse()` string ko wapas object/array mein convert karta hai.
* `useState` component ki changing values manage karta hai.
* `.map()` se multiple Todo components render kiye.
* Unique `id` ko React `key` ke taur par use kiya.
* Context API + Local Storage ko use karke **persistent Todo application** banayi.




****************************************************************************************************************************************************************

