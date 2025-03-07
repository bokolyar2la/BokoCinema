import { Telegraf } from 'telegraf';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';
import { Telegram } from './telegram.interface';
export declare class TelegramService {
    bot: Telegraf;
    options: Telegram;
    constructor();
    sendMessage(msg: string, options?: ExtraReplyMessage, chatId?: string): Promise<void>;
    sendPhoto(photo: string, msg?: string, chatId?: string): Promise<void>;
}
