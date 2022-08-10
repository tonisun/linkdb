 # <a href="https://sequelize.org/"><img src="/public/img/logo.svg" width="99px" alt="Sequelize Logo"></a> Node.js App auf Express, SQLite und Sequelize als ORM (Object Relational Mapper)

![](/public/img/colorful-wall_sm1.png)

---
![app look nice](/public/img/app.png)

>## Inhalte 

- [Projekt Settings (Visual Studio Code)](#projekt-settings-visual-studio-code)
  - [`package.json` erstellen](#`package.json`-erstellen)
- [Mapping mit `sequelize`](#mapping-mit-sequelize)
- []()
- []()
- []()
- []()

<br>

>## Projekt Settings (Visual Studio Code)

![](/public/img/LiveSassCompiler.png)![](/public/img/settings.json4LSC_sm.png)

### `package.json` erstellen ###

```bash
node init 
```

oder

```bash
node init -y
```

2. `express` Module installieren (wieso nicht `express-generator -g` ???)

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