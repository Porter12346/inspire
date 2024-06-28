import { AccountController } from "./controllers/AccountController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { TimeController } from "./controllers/TimeController.js";
import { WeatherController } from "./controllers/WeatherController.js";

import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [TimeController, ImagesController, QuotesController, WeatherController],
    view: 'app/views/MainView.html'

  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




