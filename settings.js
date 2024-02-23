export default {
    // Options for the Keyv cache, see https://www.npmjs.com/package/keyv.
    // This is used for storing conversations, and supports additional drivers (conversations are stored in memory by default).
    // Only applies when using `ChatGPTClient`.
    cacheOptions: {
        uri: process.env.REDIS_URL || 'redis://localhost:6379',
        adapter: 'redis',
        ttl: 1800000, // 30 minutes in ms
    },
    // If set, `ChatGPTClient` will use `keyv-file` to store conversations to this JSON file instead of in memory.
    // However, `cacheOptions.store` will override this if set
    storageFilePath: process.env.STORAGE_FILE_PATH || './cache.json',
    chatGptClient: {
        // Your OpenAI API key (for `ChatGPTClient`)
        openaiApiKey: process.env.OPENAI_API_KEY || '',
        // (Optional) Support for a reverse proxy for the completions endpoint (private API server).
        // Warning: This will expose your `openaiApiKey` to a third party. Consider the risks before using this.
        // reverseProxyUrl: 'https://chatgpt.hato.ai/completions',
        // (Optional) Parameters as described in https://platform.openai.com/docs/api-reference/completions
        modelOptions: {
            // You can override the model name and any other parameters here.
            model: 'ft:gpt-3.5-turbo-1106:personal::8qrDSWW6',
            // Set max_tokens here to override the default max_tokens of 1000 for the completion.
            max_tokens: 540,
        },
        // (Optional) Davinci models have a max context length of 4097 tokens, but you may need to change this for other models.
        maxContextTokens: 16000,
        // (Optional) You might want to lower this to save money if using a paid model like `text-davinci-003`.
        // Earlier messages will be dropped until the prompt is within the limit.
        maxPromptTokens: 15000,
        // (Optional) Set custom instructions instead of "You are ChatGPT...".
        // (Optional) Set a custom name for the user
        // userLabel: 'User',
        // (Optional) Set a custom name for ChatGPT ("ChatGPT" by default)
        chatGptLabel: 'AI story teller',
        promptPrefix: 'You are AI Story teller narrating a story to players in interactive game',
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false,
    },
    octoAIClient: {
        apiKey: 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjNkMjMzOTQ5In0.eyJzdWIiOiIwNDU2NDhmZS05MjlhLTQ4NTItOTJiOS0xZmFlNjE2ZGMyYjQiLCJ0eXBlIjoidXNlckFjY2Vzc1Rva2VuIiwidGVuYW50SWQiOiI2ZDU2ZTM1Mi0wOWI2LTRkMTAtOGY3Yy00MDVlZTg4NzIzNmUiLCJ1c2VySWQiOiJkYzNjY2MyMi0yYjZiLTRiZWYtYTBkMi02NTJiMWMwYTkwZjMiLCJyb2xlcyI6WyJGRVRDSC1ST0xFUy1CWS1BUEkiXSwicGVybWlzc2lvbnMiOlsiRkVUQ0gtUEVSTUlTU0lPTlMtQlktQVBJIl0sImF1ZCI6IjNkMjMzOTQ5LWEyZmItNGFiMC1iN2VjLTQ2ZjYyNTVjNTEwZSIsImlzcyI6Imh0dHBzOi8vaWRlbnRpdHkub2N0b21sLmFpIiwiaWF0IjoxNzA4NjI0NTIwfQ.Bk9p5S_BbRs1XyJVrQG29kPlV1KbiN24aK68l2WTEi9d3POrBJXWU-60IpJ0etd310ndZur5aVGuaJy9Ww9O1d-DAvRSRj_acF6GGv36r9QFVAaz2mHxUx0lmHkgiuEaaIn0dsdr9wPe9rOLws-TzEvIFzKXTiCnZ8tL67-CHogpFdL6cghOFAYnyZIVTesrKFENVJaO3mIMvWDH-6NxmIizzCMPlBwslYpD7cGwc51rVcB0dsCAsMxCLPdmrzhASJJM2hKH4CSuqzUV9vqlrULnTpGzB0mZ8TALdGVzWCj36FdfjhnIa619OtiTmcRMk6cUFjwp0B0ZSXFutCdysg', // process.env.OCTOAI_API_KEY || '',
        modelOptions: {
            // You can override the model name and any other parameters here.
            model: 'mixtral-8x7b-instruct-fp16',
            max_tokens: 512,
        },
        userLabel: 'user',
        octoAiLabel: 'system',
        promptPrefix: 'You are AI Story teller narrating a story to players in interactive game',
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false,
    },
    // Options for the Bing client
    bingAiClient: {
        // Necessary for some people in different countries, e.g. China (https://cn.bing.com)
        host: '',
        // The "_U" cookie value from bing.com
        userToken: '',
        // If the above doesn't work, provide all your cookies as a string instead
        cookies: '',
        // A proxy string like "http://<ip>:<port>"
        proxy: '',
        // (Optional) Set 'x-forwarded-for' for the request. You can use a fixed IPv4 address or specify a range using CIDR notation,
        // and the program will randomly select an address within that range. The 'x-forwarded-for' is not used by default now.
        // xForwardedFor: '13.104.0.0/14',
        // (Optional) Set 'genImage' to true to enable bing to create images for you. It's disabled by default.
        // features: {
        //     genImage: true,
        // },
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false,
    },
    chatGptBrowserClient: {
        // (Optional) Support for a reverse proxy for the conversation endpoint (private API server).
        // Warning: This will expose your access token to a third party. Consider the risks before using this.
        reverseProxyUrl: 'https://bypass.churchless.tech/api/conversation',
        // Access token from https://chat.openai.com/api/auth/session
        accessToken: '',
        // Cookies from chat.openai.com (likely not required if using reverse proxy server).
        cookies: '',
        // A proxy string like "http://<ip>:<port>"
        proxy: '',
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false,
    },
    // Options for the API server
    apiOptions: {
        port: process.env.API_PORT || 3000,
        host: process.env.API_HOST || 'localhost',
        // (Optional) Set to true to enable `console.debug()` logging
        debug: false,
        // (Optional) Possible options: "chatgpt", "chatgpt-browser", "bing". (Default: "chatgpt")
        clientToUse: 'chatgpt',
        // (Optional) Generate titles for each conversation for clients that support it (only ChatGPTClient for now).
        // This will be returned as a `title` property in the first response of the conversation.
        generateTitles: false,
        // (Optional) Set this to allow changing the client or client options in POST /conversation.
        // To disable, set to `null`.
        perMessageClientOptionsWhitelist: {
            // The ability to switch clients using `clientOptions.clientToUse` will be disabled if `validClientsToUse` is not set.
            // To allow switching clients per message, you must set `validClientsToUse` to a non-empty array.
            validClientsToUse: ['bing', 'chatgpt', 'chatgpt-browser', 'octoAi'], // values from possible `clientToUse` options above
            // The Object key, e.g. "chatgpt", is a value from `validClientsToUse`.
            // If not set, ALL options will be ALLOWED to be changed. For example, `bing` is not defined in `perMessageClientOptionsWhitelist` above,
            // so all options for `bingAiClient` will be allowed to be changed.
            // If set, ONLY the options listed here will be allowed to be changed.
            // In this example, each array element is a string representing a property in `chatGptClient` above.
            chatgpt: [
                'promptPrefix',
                'userLabel',
                'chatGptLabel',
                // Setting `modelOptions.temperature` here will allow changing ONLY the temperature.
                // Other options like `modelOptions.model` will not be allowed to be changed.
                // If you want to allow changing all `modelOptions`, define `modelOptions` here instead of `modelOptions.temperature`.
                'modelOptions.temperature',
                'modelOptions.model',
            ],
        },
    },
    // Options for the CLI app
    cliOptions: {
        // (Optional) Possible options: "chatgpt", "bing".
        // clientToUse: 'bing',
    },
};
