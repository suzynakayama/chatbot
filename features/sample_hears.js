/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// ------------------- Recipes and Phrase ------------------- 
const brigadeiro = `
Ingredients: \n
- 3 tbsp of cocoa powder
- 1 can of condensed milk
- 1 tbsp of butter \n
Directions: \n
Mix all ingredients in a saucepan over medium heat until thickened, about 10 minutes. Remove and let it cool. Form small ball and roll into chocolate sprinkles.`;

const beijinho = `
Ingredients: \n
- 1/2 cup of unsweetened shredded coconut
- 1 can of condensed milk
- 1 tbsp of butter \n
Directions: \n
Mix all ingredients in a saucepan over medium heat until thickened, about 10 minutes. Remove and let it cool. Form small ball and roll into shredded coconut. You can put a small clove on top to decorate it.
Ps. Take the clove out before eating.`;

const cajuzinho = `
Ingredients: \n
- 1 tbsp cocoa powder
- 1 can of condensed milk
- 1 tbsp of butter
- 1 cup of crushed peanuts \n
Directions: \n
Mix all ingredients in a saucepan over medium heat until thickened, about 10 minutes. Remove and let it cool. Form small ball and elongate it to look like a cashew. Roll into granulated sugar and put 1/2 peanut on top.`;

const phrase =
  "I have a few recipes options for you today. Please write 'options' and I'll give them to you.";

// ------------------- Helper Function ------------------- 
const getRecipe = msg => {
  let answer;
  if (msg.toLowerCase() === 'brigadeiro')
    answer = {
      text: `Ok. Here is the recipe: \n ${brigadeiro}`,
      url: "/images/brigadeiro.jpg",
    };
  if (msg.toLowerCase() === 'beijinho')
    answer = {
      text: `Ok. Here is the recipe: \n ${beijinho}`,
      url: "/images/beijinho.jpg",
    };
  if (msg.toLowerCase() === 'cajuzinho')
    answer = {
      text: `Ok. Here is the recipe: \n ${cajuzinho}`,
      url: "/images/cajuzinho.jpg",
    };
  return answer;
}

module.exports = function (controller) {
    
  controller.hears(
    new RegExp(/(hi|hello|howdy|hey)/i),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, { text: "Hi! I'm Yuki. How are you today?" });
    }
  );

  controller.hears(
    new RegExp(/(good|fine)/i),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          `Good! ${phrase}`,
      });
    }
  );

  controller.hears(
    [new RegExp(/bad/i), new RegExp(/(soso|so-so)/i)],
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          `Oh, sorry to hear that. ${phrase}`,
      });
    }
  );

  controller.hears(
    ["help", "menu", "/help"],
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          `${phrase} Or try 'hello', 'good', 'thank you', or 'bye'.`,
      });
    }
  );
  
  controller.hears(
    new RegExp(/option/),
    ["message", "direct_message"],
    async function (bot, message) {
      await bot.reply(message, {
        text:
          "What would you like to learn today?",
        quick_replies: [
          {
            title: 'Brigadeiro',
            payload: 'brigadeiro'
          },
          {
            title: 'Beijinho',
            payload: 'beijinho'
          },
          {
            title: 'Cajuzinho',
            payload: 'cajuzinho'
          },
        ],
      });
    }
  );

  controller.hears(
    new RegExp(/(brigadeiro|beijinho|cajuzinho)/i),
    ["message", "direct_message"],
    async function (bot, message) {
      const { text, url } = getRecipe(message.text);
      await bot.reply(message, {
        text: text,
        files: [
          {
            image: true,
            url:
              url,
          },
        ],
      });
    }
  );

    controller.hears(
      ["tks", new RegExp(/thank/i)],
      ["message", "direct_message"],
      async function (bot, message) {
        await bot.reply(message, {
          text: "You're welcome! Enjoy your cooking!",
        });
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
