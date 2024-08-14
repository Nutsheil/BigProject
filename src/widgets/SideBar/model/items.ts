import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';
import { routePaths } from 'shared/config/routeConfig';

export interface ISideBarItem {
  path: string;
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const sideBarItemsList: ISideBarItem[] = [
  {
    path: routePaths.main,
    text: 'Главная',
    Icon: MainIcon,
  },
  {
    path: routePaths.about,
    text: 'О сайте',
    Icon: AboutIcon,
  },
  {
    path: routePaths.profile,
    text: 'Профиль',
    Icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: routePaths.articles,
    text: 'Статьи',
    Icon: ArticleIcon,
    authOnly: true,
  },
];
