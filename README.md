 #  Node.js App auf Express, SQLite und Sequelize als ORM (Object Relational Mapper)

 <a href="https://code.visualstudio.com/"><img src="/public/img/vscode-svgrepo-com.svg" width="99px" alt="Visual Studio Cpode Logo"> <a href="https://expressjs.com/de/"><img src="/public/img/node-js.png" width="179px" alt="Visual Studio Cpode Logo"></a><a href="https://www.sqlite.org/index.html"><img src="/public/img/sqlite.png" width="199px" alt="Sequelize Logo"></a> <a href="https://sequelize.org/"><img src="/public/img/logo.svg" width="88px" alt="Sequelize Logo"></a> 

---

![](/public/img/colorful-wall_sm1.png)

![app look nice](/public/img/app.png)

>## Inhalte 

- [Projekt Settings (Visual Studio Code)](#projekt-settings-visual-studio-code)

  - [`package.json` erstellen](#packagejson-erstellen)
  - [`express` Module installieren](#express--module-installieren)

- [Mapping mit `sequelize`](#mapping-mit-sequelize)

- []()
- []()
- []()
- []()

<br>

>## Projekt Settings (Visual Studio Code)

![](/public/img/LiveSassCompiler.png)![](/public/img/settings.json4LSC_sm.png)

### <a href="https://sequelize.org/"><img src="/public/img/logo.svg" width="33px" alt="Sequelize Logo"></a> `package.json` erstellen ###

```bash
node init 
```

oder

```bash
node init -y
```

### `express` Module installieren

##### (wieso nicht `express-generator -g` ???)

```bash
npm i express --save 
```

3. `ejs` Module installieren

```bash
npm i ejs --save 
```

4. `bootstrap` Module installieren

```bash
npm i bootstrap --save 
```

5. `sequelize` und `sqlite3` Module installieren

```bash
npm i --save sequelize sqlite3
```

6. `body-parser` Module instalieren. Ein Module für  Express Server der die POST Daten parzt

```bash
npm i --save body-parser
```

>## Mapping mit `sequelize`