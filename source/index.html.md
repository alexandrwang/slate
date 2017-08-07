---
title: Documentation

language_tabs:
  - shell: cURL
  - javascript: JavaScript
  - python: Python
  - ruby: Ruby

toc_footers:
  - <a href='https://dashboard.scaleapi.com/signup'>Signup for Scale</a>
  - <a href="https://chat.scaleapi.com/">Join our Support Slack channel</a>

includes:
  - imageannotation
  - categorization
  - comparison
  - datacollection
  - ocrtranscription
  - audiotranscription
  - callbacks
  - taskendpoints
  - errors

search: true
---

# Introduction

> API Endpoint

```
https://api.scaleapi.com/v1/
```

Welcome to the Scale API! You can use our API to access Scale API endpoints, which can create, access, and cancel human tasks.



<ul class="products products-first">
  <li>
    <a href="#create-image-annotation-task">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 75"><g fill="none"><ellipse cx="38.39" cy="37.5" fill="#F9B25F" rx="37.47" ry="37.5"/><path fill="#000000" d="M38.39 21.25c-4.3 0-8.44 1.71-11.48 4.76L16.3 36.62a1.25 1.25 0 0 0 0 1.77l10.6 10.56a16.23 16.23 0 0 0 22.95 0l10.6-10.61c.5-.49.5-1.28 0-1.77l-10.6-10.6A16.23 16.23 0 0 0 38.4 21.2v.05z"/><path fill="#FFFFFF" d="M38.39 25c3.31 0 6.5 1.31 8.83 3.66l8.83 8.84-8.83 8.84a12.48 12.48 0 0 1-17.66 0l-8.83-8.84 8.83-8.84A12.4 12.4 0 0 1 38.39 25"/><path fill="#F9B25F" d="M38.39 48.75c6.2 0 11.24-5.04 11.24-11.25H27.15c0 6.21 5.03 11.25 11.24 11.25z"/><path fill="#F9B25F" d="M38.39 26.25c-6.21 0-11.24 5.04-11.24 11.25h22.48c0-6.21-5.04-11.25-11.24-11.25z" opacity=".5"/><ellipse cx="38.39" cy="37.5" fill="#000000" rx="5.62" ry="5.63"/></g></svg>
      <span>Image Annotation</span>
    </a>
  </li>

  <li>
    <a href="#create-audio-transcription-task">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 75"><g fill="none"><ellipse cx="38.3" cy="37.5" fill="#FF866E" rx="37.47" ry="37.5"/><path fill="#000000" d="M43.93 22.76H30.5c-.7 0-1.25.56-1.25 1.25v16.25c0 .7.56 1.25 1.25 1.25h13.43l8.53 8.54a2.5 2.5 0 0 0 4.26-1.76V16a2.5 2.5 0 0 0-4.26-1.76l-8.53 8.52z"/><polygon fill="#FFFFFF" points="45.482 26.512 32.993 26.512 32.993 37.763 45.482 37.763 52.976 45.263 52.976 19.012"/><rect width="5.62" height="11.25" x="34.24" y="26.51" fill="#FF866E" transform="rotate(180 37.052 32.138)"/><rect width="5.62" height="11.25" x="39.86" y="26.51" fill="#FF866E" opacity=".5" transform="rotate(180 42.672 32.138)"/><path fill="#FFFFFF" d="M51.73 22.04v20.21l-5.41-5.36-.36-.37H34.2v-8.75h11.76l.36-.36 5.36-5.36.05-.01zm1.2-3l-7.5 7.5H32.94v11.25h12.5l7.49 7.5V19.04z"/><rect width="22.48" height="3.75" x="17.38" y="45.26" fill="#000000" rx="1.25"/><rect width="22.48" height="3.75" x="17.38" y="52.76" fill="#000000" rx="1.25"/></g></svg>
      <span>Audio Transcription</span>
    </a>
  </li>

  <li>
    <a href="#create-ocr-transcription-task">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 61">
        <g fill="none">
          <circle cx="30" cy="30.5" r="30" fill="#38E8BA"/>
          <circle cx="30" cy="30.5" r="18" fill="#000000"/>
          <circle cx="30" cy="30.5" r="15" fill="#FFFFFF"/>
          <path fill="#38E8BA" d="M40.26 39.99H19.74a14 14 0 0 0 20.53 0h-.01z"/>
          <path fill="#38E8BA" d="M19.74 39.99h20.53a14 14 0 0 0 2.8-4.5H16.94a14 14 0 0 0 2.8 4.5z" opacity=".5"/>
          <polygon fill="#000000" points="22.5 23.5 22.5 29.5 25.5 29.5 25.5 26.5 28.5 26.5 28.5 35.5 25.5 35.5 25.5 38.5 34.5 38.5 34.5 35.5 31.5 35.5 31.5 26.5 34.5 26.5 34.5 29.5 37.5 29.5 37.5 23.5"/>
        </g>
      </svg>
      <span>OCR Transcription</span>
    </a>
  </li>
</ul>

<ul class="products products-second">
  <li>
    <a href="#create-categorization-task">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 75"><g fill="none"><ellipse cx="38.22" cy="37.5" fill="#FF9BEE" rx="37.47" ry="37.5"/><path fill="#000000" d="M18.23 20.31h23.73c.7 0 1.25.56 1.25 1.25v25H18.23c-.69 0-1.25-.56-1.25-1.25V21.56c0-.69.56-1.25 1.25-1.25z"/><rect width="18.73" height="18.75" x="20.73" y="24.06" fill="#FFFFFF"/><path fill="#FFFFFF" d="M38.22 25.31v16.25H21.98V25.31h16.24zm1.24-1.25H20.73v18.75h18.73V24.06z"/><rect width="5.62" height="16.25" x="32.59" y="25.31" fill="#FF9BEE"/><rect width="5.62" height="16.25" x="26.98" y="25.31" fill="#FF9BEE" opacity=".5"/><ellipse cx="46.33" cy="46.56" fill="#000000" rx="13.11" ry="13.13"/><ellipse cx="46.33" cy="46.56" fill="#FFFFFF" rx="9.37" ry="9.38"/><path fill="#FF9BEE" d="M48.83 37.54v18.05a9.38 9.38 0 0 0 5.62-4.37V41.9a9.38 9.38 0 0 0-5.62-4.36z"/><path fill="#FF9BEE" d="M43.21 55.4c1.8.65 3.77.72 5.62.2V37.54a9.18 9.18 0 0 0-5.62.2V55.4z" opacity=".5"/><path fill="#FFFFFF" d="M46.33 38.44a8.12 8.12 0 1 1 0 16.24 8.12 8.12 0 0 1 0-16.24zm0-1.25a9.37 9.37 0 1 0 .01 18.74 9.37 9.37 0 0 0 0-18.74z"/></g></svg>
      <span>Categorization</span>
    </a>
  </li>
  <li>
    <a href="#create-comparison-task">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 75"><g fill="none"><ellipse cx="38.13" cy="37.5" fill="#DA57C8" rx="37.47" ry="37.5"/><path fill="#FFFFFF" d="M45 25.63c-2.46 0-4.87.76-6.87 2.2A11.86 11.86 0 0 0 22.4 45.4a11.86 11.86 0 0 0 15.73 1.75 11.86 11.86 0 0 0 18.15-13.39A11.87 11.87 0 0 0 45 25.61v.02z"/><path fill="#DA57C8" d="M19.4 37.5c0 1.73.38 3.43 1.1 5h35.25a11.82 11.82 0 0 0 1.11-5v-.63H19.43l-.03.63z" opacity=".5"/><path fill="#DA57C8" d="M20.5 42.5a11.9 11.9 0 0 0 5.48 5.63h10.55c.55-.28 1.08-.6 1.59-.96.5.36 1.03.68 1.58.95h10.56a11.9 11.9 0 0 0 5.47-5.62H20.5z"/><path fill="#FFFFFF" d="M31.26 26.88a10.62 10.62 0 1 1 0 21.24 10.62 10.62 0 0 1 0-21.24zm0-1.25a11.87 11.87 0 1 0 .01 23.73 11.87 11.87 0 0 0-.01-23.73z"/><path fill="#FFFFFF" d="M45 26.88a10.62 10.62 0 1 1-.01 21.24 10.62 10.62 0 0 1 0-21.24zm0-1.25a11.87 11.87 0 1 0 0 23.73 11.87 11.87 0 0 0 0-23.73z"/><path fill="#000000" d="M45 21.88A15.62 15.62 0 1 0 45 53.1 15.62 15.62 0 0 0 45 21.88zm0 27.5a11.87 11.87 0 1 1 0-23.74 11.87 11.87 0 0 1 0 23.73z"/><path fill="#000000" d="M31.26 21.88a15.62 15.62 0 1 0 .01 31.23 15.62 15.62 0 0 0-.01-31.23zm0 27.5a11.87 11.87 0 1 1 .01-23.74 11.87 11.87 0 0 1-.01 23.73z"/><polygon fill="#FFFFFF" points="33.92 36.212 33.92 39.263 35.944 44.1 38.129 46.288 40.165 44.5 42.188 40.2 42.188 35.9"/></g></svg>
      <span>Comparison</span>
    </a>
  </li>

  <li>
    <a href="#create-data-collection-task">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 75"><g fill="none"><ellipse cx="37.96" cy="37.5" fill="#4A7AFA" rx="37.47" ry="37.5"/><path fill="#000000" d="M55.8 50.94l-8.83-7.29c5.01-6.53 4.1-15.83-2.09-21.26a15.6 15.6 0 0 0-21.33.7 15.63 15.63 0 0 0-.7 21.35 15.6 15.6 0 0 0 21.24 2.1l7.28 8.82a3.13 3.13 0 1 0 4.42-4.41v-.01z"/><ellipse cx="34.6" cy="34.13" fill="#FFFFFF" transform="rotate(-45 34.602 34.128)" rx="11.86" ry="11.88"/><path fill="#4A7AFA" d="M44.73 31.05L31.48 44.31a10.61 10.61 0 0 0 13.25-13.26z"/><path fill="#4A7AFA" d="M27.1 41.65a10.56 10.56 0 0 0 4.41 2.65l13.22-13.25c-.5-1.67-1.42-3.2-2.65-4.43l-.46-.42-14.99 15c.17.15.31.25.46.45z" opacity=".5"/></g></svg>
      <span>Data Collection</span>
    </a>
  </li>
</ul>

Anyone can use our API! [Sign up here](https://dashboard.scaleapi.com/signup) to get started using Scale. You can also [contact us](mailto:hello@scaleapi.com) for volume pricing or any inquiries.

You can also join our [Slack channel here](https://chat.scaleapi.com/)!

<!-- We have language bindings in Shell, Ruby, and Python! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.
 -->

# Client Libraries / SDKs

> To install the client library, use the following command:

```python
pip install --upgrade scaleapi
```

```javascript
npm install scaleapi --save
```

```ruby
gem install scaleapi
```

Currently we have client libraries available for the following languages:

* [Python](https://github.com/scaleapi/scaleapi-python-client) (suggested Python version > 2.7.9)
* [Node.js](https://github.com/scaleapi/scaleapi-node)
* [Ruby](https://github.com/scaleapi/scaleapi-ruby)

We also have unnoficial SDKs in the following languages:

* [Android SDK](https://github.com/vanshg/Scale) (thanks to [vanshg](https://github.com/vanshg)!)

[Let us know](mailto:hello@scaleapi.com) if you want (or are interested in writing) a library for a language not represented here!

# Authentication

> To authorize, use this code:

```shell
# With curl, you can just pass the correct header with each request
curl "api_endpoint_here" \
  -u "{{ApiKey}}:"
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');
```

```ruby
require 'scale'

scale = Scale.new(api_key: '{{ApiKey}}')
=> #<Scale:0x007fcc1292fe88 @api_key="{{ApiKey}}", @callback_auth_key=nil, @default_request_params={:callback_url=>nil}, @logging=false>
```

> <span ng-if="!user.testApiKey">You must replace <code>{{ApiKey}}</code> with your personal API key. If you <a href="https://dashboard.scaleapi.com/signup">sign up</a> or <a href="https://dashboard.scaleapi.com/login">log in</a>, your API key will be automatically filled in the docs.</span>
> <span ng-if="user.testApiKey">Your test API key <code>{{ApiKey}}</code> is included in all the examples on this page, so you can test any example right away. Only you can see this value.</span>

Scale uses API keys to allow access to the API. You can find your API keys on your [dashboard](https://dashboard.scaleapi.com/dashboard), which you can access by [logging in](https://dashboard.scaleapi.com/login) or [signing up](https://dashboard.scaleapi.com/signup).

Scale expects for the API key to be included in all API requests to the server via [HTTP Basic Auth](http://en.wikipedia.org/wiki/Basic_access_authentication). Provide your API key as the basic auth username value. You do not need to provide a password. You can do this using the `-u` flag:

`-u "{{ApiKey}}:"`

<aside class="notice" ng-if="!user.testApiKey">
You must replace <code>{{ApiKey}}</code> with your personal API key. If you <a href="https://dashboard.scaleapi.com/signup">sign up</a> or <a href="https://dashboard.scaleapi.com/login">log in</a>, your API key will be automatically filled in the docs.
</aside>

<aside class="notice" ng-if="user.testApiKey">
Your test API key <code>{{ApiKey}}</code> is included in all the examples on this page, so you can test any example right away. Only you can see this value.
</aside>

### Test and Live Modes

To make the API as explorable as possible, accounts have test mode and live mode API keys. There is no "switch" for changing between modes, just use the appropriate key to perform a live or test API requests.

Requests made with test mode credentials are not completed by a human, and therefore have incorrect test responses. Requests made with live mode credentials are always completed by a human, and will incur a charge past your first 5 API requests.

### Callback Authentication

If you'd like to authenticate our callbacks, we set a `scale-callback-auth` HTTP header on each of our callbacks. The value will be equal to your `Live Callback Auth Key` shown on your dashboard. If this header is not set, or it is set incorrectly, the callback is not from Scale.

# Task Object

The task object represents a single task that you create with Scale and is completed by a worker.

## Attributes

```json
{
  "task_id": "576ba74eec471ff9b01557cc",
  "completed_at": "2016-06-23T09:10:02.798Z",
  "created_at": "2016-06-23T09:09:34.752Z",
  "callback_url": "http://www.example.com/callback",
  "type": "categorization",
  "status": "completed",
  "instruction": "Would you say this item is big or small?",
  "urgency": "immediate",
  "params": {
    "attachment_type": "text",
    "attachment": "car",
    "categories": [
      "big",
      "small"
    ]
  },
  "callback_succeeded": true,
  "response": {
    "category": "big"
  },
  "metadata": {}
}
```

Attribute | Type | Description
--------- | ------- | -----------
`task_id` | string | The `task_id` is the unique identifier for the task.
`type` | string | The type of the task. Currently, we support `categorization`, `transcription`, `audiotranscription`, `comparison`, `annotation`, and `datacollection`.
`instruction` | string | A markdown-enabled string explaining the instructions for the task. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show example images, give structure to your instructions, and more.
`params` | object | An object with the parameters of the task based on the type. For `categorization`, for example, this will include `attachment_type`, `attachment`, and `categories`.
`urgency` | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a one-hour response time.
`response` | object | An object corresponding to the response once the task is completed. For `categorization`, it will have the attribute `category`, corresponding to the chosen category.
`callback_url` | string | A string of the URL that should be POSTed once the task is completed for the response data. See the [Callback section](#callbacks) for more details.
`status` | string | The status of the task, one of `pending`, `completed`, or `canceled`.
`created_at` | timestamp | A string of the UTC timestamp of when the task was created.
`completed_at` | timestamp | A string of the UTC timestamp of when the task was completed. This will only be filled in after it is completed.
`callback_succeeded` | boolean | A boolean stating whether or not the callback succeeded. If the callback returns with a 2xx status code, the value will be `true`. If the callback fails to return a 2xx status code through all retries, then the value will be `false`.
`metadata` | object, default `{}` | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.

## Metadata

Tasks objects have a metadata parameter. You can use this parameter to attach key-value data to tasks.

Metadata is useful for storing additional, structured information on an object. As an example, you could store a video's unique identifier in your system on its content moderation `categorization` task. You can also use it to denote the end use case for the task, as "content moderation" or "data categorization" for example. Metadata is not used by Scale (e.g., to affect how the task is done).

## Attachments

> Callback example for bad attachment URL:

```json
{
  "error": "One or more attachments could not be downloaded.",
  "attachments": [
    {
      "statusCode": 500,
      "url": "https://your-s3-bucket.s3.amazonaws.com/attachment-1.png"
    },
    {
      "statusCode": 500,
      "url": "https://your-s3-bucket.s3.amazonaws.com/attachment-2.png"
    }
  ]
}
```

Tasks often require a file associated with them that Scale API calls an attachment. For example, an annotation task requires an image file to show to a Scaler. These attachments are not limited to images and may also be audio, video, or pdf files, or a website, or even plain text. For all attachment types except plain text, the attachment must be specified via a URL. See the specific task documentation below for some examples.

Currently we only support fetching urls whose protocol is http or https.  Make sure that the URL is a direct link to the file you wish to use as an attachment and not a document showing a preview of the file.  For certain storage providers we may be able to rewrite URLs that are previews of the file you are trying to attach to the correct direct download URL.

Scale API will attempt to fetch the attachment via the URL you provide. If we do not receive an HTTP 200 response when attempting to fetch your attachment(s), we will send your `callback_url` an error with the bad HTTP codes we received.
