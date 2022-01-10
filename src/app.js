import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import notesRoutes from "./routes/notes.routes";
import path from "path";
import morgan from "morgan";
import methodOverride from "method-override";

const app = express();

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

//middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'))


//Routes
app.use(indexRoutes);
app.use(notesRoutes);


// Static files
app.use(express.static(path.join(__dirname, 'public')));


export default app;
