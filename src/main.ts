import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { AppModule } from './app/app.module';

dayjs.extend(weekOfYear)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
