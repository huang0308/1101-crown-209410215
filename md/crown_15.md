# First One

![](https://i.imgur.com/DF7ClDC.png)

**index.ejs**
```html
body>
  <h1>
    <%= title %>
  </h1>
  <p>Welcome to
    <%= title %>
  </p>
  <p></p>
  <h3>My name is
    <%= name %>
  </h3>
  <h3>My student id is
    <%= id %>
  </h3>
</body>
```

**index.js**
```js
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Tzujia Huang',
    id: '209410215',
  });
});
```
---
![](https://i.imgur.com/M8IJVb6.jpg)

---

![](https://i.imgur.com/3q660EZ.png)

---

![](https://i.imgur.com/WiMF1pA.png)

---

![](https://i.imgur.com/fZ6dQdt.png)