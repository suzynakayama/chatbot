/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const brigadeiro = `
Ingredients:
- 3 tbsp of cocoa powder
- 1 can of condensed milk
- 1 tbsp of butter
Directions:
Mix all ingredients in a saucepan over medium heat until thickened, about 10 minutes. Remove and let it cool. Form small ball and roll into chocolate sprinkles.`;

const beijinho = `
Ingredients:
- 1/2 cup of unsweetened shredded coconut
- 1 can of condensed milk
- 1 tbsp of butter
Directions:
Mix all ingredients in a saucepan over medium heat until thickened, about 10 minutes. Remove and let it cool. Form small ball and roll into shredded coconut. You can put a small clove on top to decorate it.
Ps. Take the clove out before eating.`;

const cajuzinho = `
Ingredients:
- 1 tbsp cocoa powder
- 1 can of condensed milk
- 1 tbsp of butter
- 1 cup of crushed peanuts
Directions:
Mix all ingredients in a saucepan over medium heat until thickened, about 10 minutes. Remove and let it cool. Form small ball and elongate it to look like a cashew. Roll into granulated sugar and put 1/2 peanut on top.`;

module.exports = function (controller) {
  // use a function to match a condition in the message
  controller.hears(
    async (message) => message.text && message.text.toLowerCase() === "foo",
    ["message"],
    async (bot, message) => {
      await bot.reply(message, 'I heard "foo" via a function test');
    }
  );

  // use a regular expression to match the text of the message
  controller.hears(
    new RegExp(/^\d+$/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text: "I heard a number using a regular expression.",
      });
    }
  );

  controller.hears(
    new RegExp(/ood/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "Good! I have a few recipe options for you today. Please write 'options' and I'll give them to you.",
      });
    }
  );

  controller.hears(
    new RegExp(/ine/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "Good! I have a few recipe options for you today. Please write 'options' and I'll give them to you.",
      });
    }
  );
    
  controller.hears("tks", ["message", "direct_message"], async function (
    bot,
    message
  ) {
    await bot.reply(message, { text: "You're welcome!" });
  });

  controller.hears(
    new RegExp(/hank/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, { text: "You're welcome!" });
    }
  );

  controller.hears(
    ["bad", "Bad", "so-so", "So-so"],
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, { text: "Oh, sorry to hear that." });
    }
  );

  controller.hears(
    new RegExp(/option/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "What would you like to learn today? Brigadeiro, Beijinho, or Cajuzinho?",
      });
    }
  );

  controller.hears(
    new RegExp(/rigadeiro/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text: `Ok! Here is the recipe:
                ${brigadeiro}`,
        files: [
          {
            image: true,
            url:
              "https://www.receitasnestle.com.br/images/default-source/recipes/brigadeiro_alta.jpg",
          },
        ],
      });
    }
  );

  controller.hears(
    new RegExp(/eijinho/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text: `Ok! Here is the recipe:
                ${beijinho}`,
        files: [
          {
            image: true,
            url:
              "https://www.receitasnestle.com.br/images/default-source/recipes/beijinho-alta-1-20170606022820367.tmb-customthum.jpg",
          },
        ],
      });
    }
  );

  controller.hears(
    new RegExp(/ajuzinho/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text: `Ok! Here is the recipe:
                ${cajuzinho}`,
        files: [
          {
            image: true,
            url:
              "https://www.receitasnestle.com.br/images/default-source/recipes/cajuzinho-alta-1-20170606022953736.jpg",
          },
        ],
      });
    }
  );

  // match any one of set of mixed patterns like a string, a regular expression
  controller.hears(
    [
        "hi",
        "Hi",
        "Hello",
        "hello",
        "howdy",
        "Howdy",
        "Hey",
        "hey",
        "aloha",
        "Aloha",
        "hola",
        "Hola",
        "bonjour",
        "Bonjour",
        "oi",
        "Oi",
    ],
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, { text: "Hi! I'm Yuki. How are you today?" });
    }
  );
    
    controller.hears(
      ["bye", "Bye"],
      ["message", "direct_message"],
      async (bot, message) => {
        await bot.reply(message, "Bye! Thank you for chatting with me today!");
      }
    );
};
