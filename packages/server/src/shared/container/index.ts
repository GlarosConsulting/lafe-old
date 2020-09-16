import { container } from 'tsyringe';

import '@modules/users/providers';
import '@modules/signals/providers';
import '@modules/subscriptions/providers';

import './providers';

import MessagesRepository from '@modules/messages/infra/typeorm/repositories/MessagesRepository';
import IMessagesRepository from '@modules/messages/repositories/IMessagesRepository';
import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import SignalsRepository from '@modules/signals/infra/typeorm/repositories/SignalsRepository';
import ISignalsRepository from '@modules/signals/repositories/ISignalsRepository';
import SubscriptionsRepository from '@modules/subscriptions/infra/typeorm/repositories/SubscriptionsRepository';
import ISubscriptionsRepository from '@modules/subscriptions/repositories/ISubscriptionsRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationsRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);

container.registerSingleton<ISignalsRepository>(
  'SignalsRepository',
  SignalsRepository,
);

container.registerSingleton<ISubscriptionsRepository>(
  'SubscriptionsRepository',
  SubscriptionsRepository,
);

container.registerSingleton<IMessagesRepository>(
  'MessagesRepository',
  MessagesRepository,
);
