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

Tasks often require a file associated with them that Scale API calls an attachment. For example, an annotation task requires an image file to show to a Scaler. These attachments are not limited to images and may also be audio, video, or pdf files, or a website, or even plain text. For all attachment types except plain text, the attachment must be specified via a URL. See the specific task documentation below for some examples.

Scale API will attempt to fetch the attachment via the URL you provide. If we do not receive an HTTP 200 response when attempting to fetch your attachment(s), we will send your `callback_url` an error with the bad HTTP codes we received.

> Callback example for bad attachment URL:

```json
{
    "error": "One or more attachments could not be downloaded.",
    "attachments":[
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

# Create Categorization Task

```shell
curl "https://api.scaleapi.com/v1/task/categorization" \
  -u "{{ApiKey}}:" \
  -d callback_url="http://www.example.com/callback" \
  -d instruction="Is this company public or private?" \
  -d attachment_type=website \
  -d attachment="http://www.google.com/" \
  -d categories=public \
  -d categories=private
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')

client.create_categorization_task(
    callback_url='http://www.example.com/callback',
    instruction='Is this company public or private?',
    attachment_type='website',
    attachment='http://www.google.com/',
    categories=['public', 'private']
)

```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

client.createCategorizationTask({
  'callback_url': 'http://www.example.com/callback',
  'instruction': 'Is this company public or private?',
  'attachment_type': 'website',
  'attachment': 'http://www.google.com/',
  'categories': ['public', 'private']
}, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.create_categorization_task({
  callback_url: 'http://www.example.com/callback',
  instruction: 'Is this company public or private?',
  attachment_type: 'website',
  attachment: 'https://www.google.com',
  categories: ['public', 'private']
})
=> #<Scale::Api::Tasks::Categorization:0x007fcc11819bf8 @task_id="58a63795aa9d139b20a42535", @type="categorization", @instruction="Is this company public or private?", @params={"allow_multiple"=>false, "categories"=>["public", "private"], "attachment"=>"https://www.google.com", "attachment_type"=>"website"}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:53 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "576ba74eec471ff9b01557cc",
  "created_at": "2016-06-23T09:09:34.752Z",
  "callback_url": "http://www.example.com/callback",
  "type": "categorization",
  "status": "pending",
  "instruction": "Is this company public or private?",
  "urgency": "day",
  "params": {
    "attachment_type": "website",
    "attachment": "http://www.google.com/",
    "categories": [
      "public",
      "private"
    ]
  },
  "metadata": {}
}
```

This endpoint creates a `categorization` task. In this task, one of our workers will view the attachment and choose a category for it according to the instruction. You may allow multiple categories to be chosen by setting `allow_multiple` to `true`. Example use cases are spam detection, copyright detection, product categorization, etc.

This task involves a [markdown-enabled](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) `instruction` about how to make the categorization, an `attachment` of what you'd like to categorize, an `attachment_type`, and finally a list of `categories`.

There is an optional `category_ids` parameter, which you can use to impose an id system over the categories. The format of this parameter should be a dictionary, where the keys are the ids (as strings), and then the values are the category values provided in `categories`. An example is:

```"category_ids": {
  "123": "Blue Cross",
  "124": "Red Cross"
}```

If successful, Scale will immediately return the generated task object, of which you should at least store the `task_id`.

The parameters `attachment_type`, `attachment`, `categories`, and `category_ids` (optional) will be stored in the `params` object of the constructed `task` object.

### HTTP Request

`POST https://api.scaleapi.com/v1/task/categorization`

### Parameters

Parameter | Type | Description
--------- | ---- | -------
`callback_url` | string | The full url (including the scheme `http://` or `https://`) of the callback when the task is completed. See the [Callback section](#callbacks) for more details about callbacks.
`instruction` | string | A markdown-enabled string explaining how to categorize the item. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show example images, give structure to your instructions, and more.
`attachment_type` | string | One of `text`, `image`, `video`, `audio`, `website`, or `pdf`. Describes what type of file the attachment is.
`attachment` | string | The attachment to be categorized. If `attachment_type` is `text`, then it should be plaintext. Otherwise, it should be a URL pointing to the attachment.
`categories` | [string] | An array of strings for the categories which you'd like the object to be sorted between.
`urgency` (optional, default `day`) | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a one-hour response time.
`category_ids` (optional) | dictionary | An optional dictionary where the keys are the optional ids, and the values are the category values provided in `categories`.
`allow_multiple` (optional) | boolean | Default is `false`. Determines whether you allow multiple categories to be chosen for the attachment
`metadata` (optional, default `{}`) | object | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.

## Callback Format

> If `allow_multiple` is `false`, the callback body will look like:

```json
{
  "response": {
    "category": "one_of_the_categories"
  },
  "task_id": "576ba74eec471ff9b01557cc",
  "task": {
    // populated task for convenience
    ...
  }
}
```
> If `allow_multiple` is `true`, the callback body will look like:

```json
{
  "response": {
    "category": ["some_of", "the_categories"]
  },
  "task_id": "576ba74eec471ff9b01557cc",
  "task": {
    // populated task for convenience
    ...
  }
}
```
> Example if `category_ids` is provided and `allow_multiple` is `false`

```json
{
  "response": {
    "category": "Blue Cross",
    "category_id": "123"
  },
  "task_id": "576ba74eec471ff9b01557cc",
  "task": {
    // populated task for convenience
    ...
  }
}
```
> Example if `category_ids` is provided and `allow_multiple` is `true`

```json

{
  "response": {
    "category": ["Blue Cross", "Red Cross"],
    "category_id": ["123", "124"]
  },
  "task_id": "576ba74eec471ff9b01557cc",
  "task": {
    // populated task for convenience
    ...
  }
}
```

The `response` object, which is part of the callback POST request and permanently stored as part of the task object, will have a `category` field and potentially a `category_id` field.

If `allow_multiple` is `false`, then the value will be a string equal to one of the original categories.

If `allow_multiple` is `true`, the value will be an array of categories, each one being one of the original categories.

If `category_ids` was provided, there will be another field `category_id` corresponding to the given id of the chosen category/categories.

<aside class="notice">
See the <a href="#callbacks">Callback section</a> for more details about callbacks.
</aside>

# Create Comparison Task

```shell
curl "https://api.scaleapi.com/v1/task/comparison" \
  -u "{{ApiKey}}:" \
  -d callback_url="http://www.example.com/callback" \
  -d instruction="Do the objects in these images have the same pattern?" \
  -d attachment_type=image \
  -d attachments="http://i.ebayimg.com/00/$T2eC16dHJGwFFZKjy5ZjBRfNyMC4Ig~~_32.JPG" \
  -d attachments="http://images.wisegeek.com/checkered-tablecloth.jpg" \
  -d choices="yes" \
  -d choices="no"
```
```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')

client.create_comparison_task(
    callback_url='http://www.example.com/callback',
    instruction='Do the objects in these images have the same pattern?',
    attachment_type='image',
    attachments=[
        'http://i.ebayimg.com/00/$T2eC16dHJGwFFZKjy5ZjBRfNyMC4Ig~~_32.JPG',
        'http://images.wisegeek.com/checkered-tablecloth.jpg'
    ],
    choices=['yes', 'no']
)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

client.createComparisonTask({
  'callback_url': 'http://www.example.com/callback',
  'instruction': 'Do the objects in these images have the same pattern?',
  'attachment_type': 'image',
  'attachments': [
    'http://i.ebayimg.com/00/$T2eC16dHJGwFFZKjy5ZjBRfNyMC4Ig~~_32.JPG',
    'http://images.wisegeek.com/checkered-tablecloth.jpg'
  ],
  'choices': ['yes', 'no']
}, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.create_comparison_task({
  callback_url: 'http://www.example.com/callback',
  instruction: 'Do the objects in these images have the same pattern?',
  attachments: [
    'http://i.ebayimg.com/00/$T2eC16dHJGwFFZKjy5ZjBRfNyMC4Ig~~_32.JPG',
    'http://images.wisegeek.com/checkered-tablecloth.jpg'
  ],
  attachment_type: 'image',
  choices: ['yes', 'no']
})
=> #<Scale::Api::Tasks::Comparison:0x007fcc109636e0 @task_id="58a6378aaa9d139b20a42532", @type="comparison", @instruction="Do the objects in these images have the same pattern?", @params={"choices"=>["yes", "no"], "attachment_type"=>"image", "attachments"=>["http://i.ebayimg.com/00/$T2eC16dHJGwFFZKjy5ZjBRfNyMC4Ig~~_32.JPG", "http://images.wisegeek.com/checkered-tablecloth.jpg"]}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:42 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "5774cc78b02487c424f089dd",
  "created_at": "2016-06-30T07:38:32.368Z",
  "callback_url": "http://www.example.com/callback",
  "type": "comparison",
  "status": "pending",
  "instruction": "Do the objects in these images have the same pattern?",
  "urgency": "day",
  "params": {
    "choices": [
      "yes",
      "no"
    ],
    "attachment_type": "image",
    "attachments": [
      "http://i.ebayimg.com/00/$T2eC16dHJGwFFZKjy5ZjBRfNyMC4Ig~~_32.JPG",
      "http://images.wisegeek.com/checkered-tablecloth.jpg"
    ]
  },
  "metadata": {}
}
```

This endpoint creates a `comparison` task. In this task, one of our workers view the given attachments and do any comparison requested.

This task involves a [markdown-enabled](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) `instruction`, an array of `attachments`, and an `attachment_type`.

At least of the `fields` or `choices` parameters must specified for the data to be returned. `choices` is an array of strings from which the worker to choose, and `fields` is useful for free-text response.

`fields` is a dictionary where the keys are the keys you'd like the results to be returned under, and values are the descriptions you'd like to show the human worker.

If successful, Scale will immediately return the generated task object, of which you should store the `task_id`.

The parameters `attachment_type`, `attachments`, `choices`, and `fields` will be stored in the `params` object of the constructed `task` object.

### HTTP Request

`POST https://api.scaleapi.com/v1/task/comparison`

### Parameters

Parameter | Type | Description
--------- | ---- | -------
`callback_url` | string | The full url (including the scheme `http://` or `https://`) of the callback when the task is completed. See the [Callback section](#callbacks) for more details about callbacks.
`instruction` | string | A markdown-enabled string explaining how to compare the attachments. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show example images, give structure to your instructions, and more.
`attachment_type` | string | One of `text`, `image`, `video`, `audio`, `website`, or `pdf`. Describes what type of file the attachments are.
`attachments` | array | An array of attachments to compare. If `attachment_type` is `text`, then each attachment should be plaintext. Otherwise, they should be URLs pointing to the attachments.
`urgency` (optional, default `day`) | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a one hour response time.
`fields` (optional) | dictionary | A dictionary corresponding to the fields to be recorded. Keys are the keys you'd like the fields to be returned under, and values are descriptions to be shown to human workers.
`choices` (optional) | [string] | An array of strings for the choices to be given to the worker. One of `choices` or `fields` must be specified.
`metadata` (optional, default `{}`) | object | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.

## Callback Format

> Example callback body:

```json
{
  "response": {
    "choice": "yes",
    "fields": {
      "difference": "The patterns are identical."
    }
  },
  "task_id": "576ba74eec471ff9b01557cc",
  "task": {
    // populated task for convenience
    ...
  }
}
```

The `response` object, which is part of the callback POST request and permanently stored as part of the task object, will have a `fields` field and/or `choice` field depending on the original request.

If your original call provided `choices`, `choice` will be one of the original choices.

If your original call provided `fields`, `fields` will have keys corresponding to the keys you provided in the parameters, with values the transcribed value.

<aside class="notice">
See the <a href="#callbacks">Callback section</a> for more details about callbacks.
</aside>

# Create Data Collection Task

```shell
curl "https://api.scaleapi.com/v1/task/datacollection" \
  -u "{{ApiKey}}:" \
  -d callback_url="http://www.example.com/callback" \
  -d instruction="Find the URL for the hiring page for the company with attached website." \
  -d attachment_type=website \
  -d attachment="https://www.scaleapi.com/" \
  -d fields[hiring_page]="Hiring Page URL"
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')

client.create_datacollection_task(
    callback_url='http://www.example.com/callback',
    instruction='Find the URL for the hiring page for the company with attached website.',
    attachment_type='website',
    attachment='https://www.scaleapi.com',
    fields={
        'hiring_page': 'Hiring Page URL'
    }
)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

client.createDatacollectionTask({
  'callback_url': 'http://www.example.com/callback',
  'instruction': 'Find the URL for the hiring page for the company with attached website.',
  'attachment_type': 'website',
  'attachment': 'https://www.scaleapi.com/',
  'fields': {
    'hiring_page': 'Hiring Page URL'
  }
}, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.create_datacollection_task({
  callback_url: 'http://www.example.com/callback',
  instruction: 'Find the URL for the hiring page for the company with attached website.',
  attachment: 'https://www.scaleapi.com/',
  attachment_type: 'website',
  fields: {
    hiring_page: 'Hiring Page URL'
  }
})
=> #<Scale::Api::Tasks::Datacollection:0x007fcc109b7a38 @task_id="58a63649aa9d139b20a42531", @type="datacollection", @instruction="Find the URL for the hiring page for the company with attached website.", @params={"fields"=>{"hiring_page"=>"Hiring Page URL"}, "attachment"=>"https://www.scaleapi.com/", "attachment_type"=>"website"}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:31:21 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "576de9dc1ea5f917d56fc2a0",
  "created_at": "2016-06-25T02:18:04.248Z",
  "callback_url": "http://www.example.com/callback",
  "type": "datacollection",
  "status": "pending",
  "instruction": "Find the URL for the hiring page for the company with attached website.",
  "urgency": "day",
  "params": {
    "fields": {
      "hiring_page": "Hiring Page URL"
    },
    "attachment": "http://www.scaleapi.com/",
    "attachment_type": "website"
  },
  "metadata": {}
}
```

This endpoint creates a `datacollection` task. In this task, one of our workers will try to find some information through the internet, following the instructions that you provide. Example use cases could be finding the product page of a particular product on Amazon, or trying to find the email of a particular person given their name and position.

This task involves a [markdown-enabled](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) `instruction` about how to find the information, an `attachment` detailing the particular data you'd like to collect, an `attachment_type`, and a `fields` parameter, which describes all of the different pieces of information you'd like captured.

The `fields` parameter is a dictionary where the keys are the keys you'd like the results to be returned under, and values are the descriptions you'd like to show the human Scaler.

If successful, Scale will immediately return the generated task object, of which you should at least store the `task_id`.

The parameters `attachment_type`, `attachment`, and `fields` will be stored in the `params` object of the constructed `task` object.

### HTTP Request

`POST https://api.scaleapi.com/v1/task/datacollection`

### Parameters

Parameter | Type | Description
--------- | ---- | -------
`callback_url` | string | The full url (including the scheme `http://` or `https://`) of the callback when the task is completed. See the [Callback section](#callbacks) for more details about callbacks.
`instruction` | string | A markdown-enabled string explaining how to collect the data. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show example images, give structure to your instructions, and more.
`attachment_type` | string | One of `text`, `image`, or `website`. Describes what type of file the attachment is.
`attachment` | string | The attachment detailing the data to be collected. If `attachment_type` is `text`, then it should be plaintext. Otherwise, it should be a URL pointing to the attachment.
`fields` | dictionary | A dictionary corresponding to the fields of information to be collected. Keys are the keys you'd like the fields to be returned under, and values are descriptions to be shown to human workers.
`urgency` (optional, default `day`) | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a one-hour response time.
`metadata` (optional, default `{}`) | object | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.

## Callback Format

> Example callback body

```json
{
  "response": {
    "fields": {
      "hiring_page": "Hiring Page URL"
    }
  },
  "task_id": "576ba74eec471ff9b01557cc",
  "task": {
    // populated task for convenience
    ...
  }
}
```

The `response` object, which is part of the callback POST request and permanently stored as part of the task object, will have a `fields` object.

`fields` will have keys corresponding to the keys you provided in the parameters, with values the transcribed value.

<aside class="notice">
See the <a href="#callbacks">Callback section</a> for more details about callbacks.
</aside>

# Create Image Annotation Task

```shell
curl "https://api.scaleapi.com/v1/task/annotation" \
  -u "{{ApiKey}}:" \
  -d callback_url="http://www.example.com/callback" \
  -d instruction="Draw a box around each **baby cow** and **big cow**." \
  -d attachment_type=image \
  -d attachment="http://i.imgur.com/v4cBreD.jpg" \
  -d objects_to_annotate="baby cow" \
  -d objects_to_annotate="big cow" \
  -d with_labels=true \
  -d min_width="30" \
  -d min_height="30" \
  -d examples[0][correct]=true \
  -d examples[0][image]="http://i.imgur.com/lj6e98s.jpg" \
  -d examples[0][explanation]="The boxes are tight and accurate" \
  -d examples[1][correct]=false \
  -d examples[1][image]="http://i.imgur.com/HIrvIDq.jpg" \
  -d examples[1][explanation]="The boxes are neither accurate nor complete"
```
```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')

client.create_annotation_task(
    callback_url='http://www.example.com/callback',
    instruction='Draw a box around each **baby cow** and **big cow**',
    attachment_type='image',
    attachment='http://i.imgur.com/v4cBreD.jpg',
    objects_to_annotate=['baby cow', 'big cow'],
    with_labels=True,
    min_width='30',
    min_height='30',
    examples = [
        {
            'correct': False,
            'image': 'http://i.imgur.com/lj6e98s.jpg',
            'explanation': 'The boxes are tight and accurate'
        },
        {
            'correct': True,
            'image': 'http://i.imgur.com/HIrvIDq.jpg',
            'explanation': 'The boxes are neither accurate nor complete'
        }
    ]
)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

client.createAnnotationTask({
  'callback_url': 'http://www.example.com/callback',
  'instruction': 'Draw a box around each **baby cow** and **big cow**',
  'attachment_type': 'image',
  'attachment': 'http://i.imgur.com/v4cBreD.jpg',
  'objects_to_annotate': ['baby cow', 'big cow'],
  'with_labels': true,
  'min_width': '30',
  'min_height': '30',
  'examples': [
    {
      'correct': false,
      'image': 'http://i.imgur.com/lj6e98s.jpg',
      'explanation': 'The boxes are tight and accurate'
    },
    {
      'correct': true,
      'image': 'http://i.imgur.com/HIrvIDq.jpg',
      'explanation': 'The boxes are neither accurate nor complete'
    }
  ]
}, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.create_annotation_task({
  callback_url: 'http://www.example.com/callback',
  instruction: 'Draw a box around each **baby cow** and **big cow**',
  attachment_type: 'image',
  attachment: 'http://i.imgur.com/v4cBreD.jpg',
  objects_to_annotate: ['baby cow', 'big cow'],
  with_labels: true,
  min_width: '30',
  min_height: '30',
  examples: [
    {
      correct: false,
      image: 'http://i.imgur.com/lj6e98s.jpg',
      explanation: 'The boxes are tight and accurate'
    },
    {
      correct: true,
      image: 'http://i.imgur.com/HIrvIDq.jpg',
      explanation: 'The boxes are neither accurate nor complete'
    }
  ]
})
=> #<Scale::Api::Tasks::ImageRecognition:0x007fcc11092f10 @task_id="58a6363baa9d139b20a4252f", @type="annotation", @instruction="Draw a box around each **baby cow** and **big cow**", @params={"examples"=>[{"explanation"=>"The boxes are tight and accurate", "image"=>"http://i.imgur.com/lj6e98s.jpg", "correct"=>false}, {"explanation"=>"The boxes are neither accurate nor complete", "image"=>"http://i.imgur.com/HIrvIDq.jpg", "correct"=>true}], "with_labels"=>true, "objects_to_annotate"=>["baby cow", "big cow"], "attachment_type"=>"image", "attachment"=>"http://i.imgur.com/v4cBreD.jpg"}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:31:07 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "5774cc78b01249ab09f089dd",
  "created_at": "2016-9-03T07:38:32.368Z",
  "callback_url": "http://www.example.com/callback",
  "type": "annotation",
  "status": "pending",
  "instruction": "Draw a box around each **baby cow** and **big cow**",
  "urgency": "day",
  "params": {
    "examples": [
      {
        "explanation": "The boxes are tight and accurate",
        "image": "http://i.imgur.com/lj6e98s.jpg",
        "correct": true
      },
      {
        "explanation": "The boxes are neither accurate nor complete",
        "image": "http://i.imgur.com/HIrvIDq.jpg",
        "correct": false
      }
    ],
    "with_labels": true,
    "min_width": 30,
    "min_height": 30,
    "objects_to_annotate": [
      "baby cow",
      "big cow"
    ],
    "attachment_type": "image",
    "attachment": "http://i.imgur.com/v4cBreD.jpg"
  },
  "metadata": {}
}
```

This endpoint creates a `annotation` task. In this task, one of our Scalers view the given image and draw bounding boxes around the specified objects, returning the positions and sizes of these boxes.

The required parameters for this task are `callback_url`, `attachment`, and `objects_to_annotate`. The `callback_url` is the URL which will be POSTed on task completion, and is described in more detail in the [Callbacks section](#callbacks). The `attachment` is a URL to an image you'd like to be annotated.

`objects_to_annotate` is an array of strings describing the different types of objects you'd like annotated.

You can optionally provide additional [markdown-enabled](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) instructions via the `instruction` parameter.

You can also optionally set `with_labels` to `true`, which will have Scalers provide labels for each box specifying what type of object it is. The labels will be strings in the `objects_to_annotate` list.

It is recommended, but not required, for you to provide a list of examples, each of which detail either a correct or incorrect example of an annotation.

You may also provide `min_width` and `min_height` parameters, which will tell Scalers to only annotate objects whose bounding boxes are of dimension at least `min_width` x `min_height`.

If successful, Scale will immediately return the generated task object, of which you should at least store the `task_id`.

### HTTP Request

`POST https://api.scaleapi.com/v1/task/annotation`

### Parameters

Parameter | Type | Description
--------- | ---- | -------
`callback_url` | string | The full url (including the scheme `http://` or `https://`) of the callback when the task is completed. See the [Callback section](#callbacks) for more details about callbacks.
`objects_to_annotate` | [string] | An array of strings describing which objects you'd like bounding boxes to be drawn around. Each string should be singular and self-descriptive (ex: "cat", "street sign", "potato"). You may include at most 6 objects.
`attachment` | string | A URL to the image you'd like to be annotated with bounding boxes.
`with_labels` (optional, default `false`) | boolean | Specifies whether you'd like labels for each bounding box in the response. Each label will be a member of the `objects_to_annotate` array.
`examples` (optional) | [object] | A list of examples. Each example requires a `correct` boolean indicating whether it is a correct or incorrect example and an `image` URL to the example image. Optionally, provide an `explanation` for the example explaining why it is correct or incorrect.
`min_height` (optional) | integer, default 0 | The minimum height in pixels of the bounding boxes you'd like to be made.
`min_width` (optional) | integer, default 0 | The minimum width in pixels of the bounding boxes you'd like to be made.
`urgency` (optional, default `day`) | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a one-hour response time.
`instruction` (optional) | string | A markdown-enabled string explaining how to draw the bounding boxes. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show example images, give structure to your instructions, and more.
`attachment_type` (optional, default `image`) | string | Describes what type of file the attachment is. We currently only support `image` for the annotation endpoint.
`metadata` (optional, default `{}`) | object | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.

## Callback Format

> Example callback body sent on completion

```json
{
  "response": {
    "annotations": [
      {
        "left": 123,
        "top": 10,
        "width": 121,
        "height": 39,
        "label": "big cow"
      },
      {
        "left": 82,
        "top": 56,
        "width": 64,
        "height": 30,
        "label": "baby cow"
      },
      { ... },
      { ... }
    ]
  },
  "task_id": "5774cc78b01249ab09f089dd",
  "task": {
    // populated task for convenience
    ...
  }
}
```

The `response` object, which is part of the callback POST request and permanently stored as part of the task object, will have either an `error` field or an `annotations` field.

If the annotation was completed successfully, the `annotations` field will contain an array of annotations. Each annotation will have the following values:

* `left`: The distance, in pixels, between the left border of the bounding box and the left border of the image.
* `top`: The distance, in pixels, between the top border of the bounding box and the top border of the image.
* `width`: The width, in pixels, of the bounding box.
* `height`: The height, in pixels, of the bounding box.
* `label` (if specified `with_labels` as `true`): The label for the bounding box, which will be one of the specified `task.params.objects_to_annotate`.

If the attachment was invalid, the error will be detailed in the `error` field.

<aside class="notice">
See the <a href="#callbacks">Callback section</a> for more details about callbacks.
</aside>

# Create OCR Transcription Task

```shell
curl "https://api.scaleapi.com/v1/task/transcription" \
  -u "{{ApiKey}}:" \
  -d callback_url="http://www.example.com/callback" \
  -d instruction="Transcribe the given fields." \
  -d attachment_type=website \
  -d attachment="http://news.ycombinator.com/" \
  -d fields[title]="Title of Webpage" \
  -d fields[top_result]="Title of the top result"
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')

client.create_transcription_task(
    callback_url='http://www.example.com/callback',
    instruction='Transcribe the given fields.',
    attachment_type='website',
    attachment='http://news.ycombinator.com/',
    fields={
        'title': 'Title of Webpage',
        'top_result': 'Title of the top result'
    }
)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

client.createTranscriptionTask({
  'callback_url': 'http://www.example.com/callback',
  'instruction': 'Transcribe the given fields.',
  'attachment_type': 'website',
  'attachment': 'http://news.ycombinator.com/',
  'fields': {
    'title': 'Title of Webpage',
    'top_result': 'Title of the top result'
  }
}, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.create_transcription_task({
  callback_url: 'http://www.example.com/callback',
  instruction: 'Transcribe the given fields.',
  attachment_type: 'website',
  attachment: 'http://news.ycombinator.com/',
  fields: {
    title: 'Title of Webpage',
    top_result: 'Title of the top result'
  }
})

=> #<Scale::Api::Tasks::Transcription:0x007fcc1098d828 @task_id="58a6361eaa9d139b20a4252d", @type="transcription", @instruction="Transcribe the given fields.", @params={"fields"=>{"top_result"=>"Title of the top result", "title"=>"Title of Webpage"}, "attachment"=>"http://news.ycombinator.com/", "attachment_type"=>"website"}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:30:38 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "576de9dc1ea5f917d56fc2a0",
  "created_at": "2016-06-25T02:18:04.248Z",
  "callback_url": "http://www.example.com/callback",
  "type": "transcription",
  "status": "pending",
  "instruction": "Transcribe the given fields.",
  "urgency": "day",
  "params": {
    "fields": {
      "title": "Title of Webpage",
      "top_result": "Title of the top result"
    },
    "attachment": "http://news.ycombinator.com/",
    "attachment_type": "website"
  },
  "metadata": {}
}
```

This endpoint creates a `transcription` task. In this task, one of our workers will read an attachment and arbitrarily transcribe any information you'd like. Example use cases could be transcribing information from PDFs, manually scraping a web page for information, etc.

This task involves a [markdown-enabled](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) `instruction` about how to transcribe the attachment, an `attachment` of what you'd like to transcribe, an `attachment_type`, and `fields`. `fields` is a dictionary which describes items you'd like transcribed for the attachment. Examples are phone numbers, names, etc.

`fields` is a dictionary where the keys are the keys you'd like the results to be returned under, and values are the descriptions you'd like to show the human Scaler.

If successful, Scale will immediately return the generated task object, of which you should at least store the `task_id`.

The parameters `attachment_type`, `attachment`, and `fields` will be stored in the `params` object of the constructed `task` object.

### HTTP Request

`POST https://api.scaleapi.com/v1/task/transcription`

### Parameters

Parameter | Type | Description
--------- | ---- | -------
`callback_url` | string | The full url (including the scheme `http://` or `https://`) of the callback when the task is completed. See the [Callback section](#callbacks) for more details about callbacks.
`instruction` | string | A markdown-enabled string explaining how to transcribe the attachment. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show example images, give structure to your instructions, and more.
`attachment_type` | string | One of `image`, `pdf`, or `website`. Describes what type of file the attachment is.
`attachment` | string | The attachment to be transcribed. If `attachment_type` is `text`, then it should be plaintext. Otherwise, it should be a URL pointing to the attachment.
`fields` | object | A dictionary corresponding to the fields to be transcribed. Keys are the keys you'd like the fields to be returned under, and values are descriptions to be shown to human workers.
`urgency` (optional, default `day`) | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a one-hour response time.
`metadata` (optional, default `{}`) | object | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.

## Callback Format

> Example callback response sent on completion

```json
{
  "response": {
    "fields": {
      "title": "Some Title",
      "top_result": "The Top Result or Something"
    }
  },
  "task_id": "5774cc78b01249ab09f089dd",
  "task": {
    // populated task for convenience
    ...
  }
}
```

The `response` object, which is part of the callback POST request and permanently stored as part of the task object, will have a `fields` field.

`fields` will have keys corresponding to the keys you provided in the parameters, with values the transcribed value.

<aside class="notice">
See the <a href="#callbacks">Callback section</a> for more details about callbacks.
</aside>

# Create Audio Transcription Task

```shell
curl "https://api.scaleapi.com/v1/task/audiotranscription" \
  -u "{{ApiKey}}:" \
  -d callback_url="http://www.example.com/callback" \
  -d attachment_type=audio \
  -d attachment="https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav" \
  -d verbatim=false \
  -d phrases=avocado \
  -d phrases=stone
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')

client.create_audiotranscription_task(
    callback_url='http://www.example.com/callback',
    attachment_type='audio',
    attachment='https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav',
    verbatim=False,
    phrases=['avocado', 'stone']
)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

client.createAudiotranscriptionTask({
  'callback_url': 'http://www.example.com/callback',
  'attachment_type': 'audio',
  'attachment': 'https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav',
  'verbatim': false,
  'phrases': ['avocado', 'stone']
}, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.create_audiotranscription_task({
  callback_url: 'http://www.example.com/callback',
  attachment_type: 'audio',
  attachment: 'https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav',
  verbatim: false,
  phrases: ['avocado', 'stone']
})

=> #<Scale::Api::Tasks::AudioTranscription:0x007fcc109b7d58 @task_id="58a6341eaa9d139b20a4252b", @type="audiotranscription", @instruction="Please transcribe the attached audio file.", @params={"verbatim"=>false, "attachment_type"=>"audio", "attachment"=>"https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav"}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:22:06 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "582bfe0ee5d51cda4e903f4a",
  "created_at": "2016-11-16T06:34:54.884Z",
  "callback_url": "http://www.example.com/callback",
  "type": "audiotranscription",
  "status": "pending",
  "urgency": "day",
  "instruction": "Please transcribe the attached audio file.",
  "params": {
    "verbatim": false,
    "attachment_type": "audio",
    "attachment": "https://storage.googleapis.com/deepmind-media/pixie/knowing-what-to-say/second-list/speaker-3.wav",
    "phrases": ["avocado", "stone"]
  },
  "is_test": true,
  "metadata": {}
}
```

This endpoint creates an `audiotranscription` task. In this task, we will transcribe the speech from the audio file you specify into plaintext.

You are required to provide a URL to the audio file as the `attachment`. The `attachment_type` must be `audio`.

If you have more specific instructions about how to transcribe the audio file, you may optionally provide a [markdown-enabled](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) `instruction`.

You may optionally specify `verbatim` to `true` or `false`, determining whether non-words such as "um" and "hm" will be included in the transcript. The default is `false`.

You may also optionally specify `phrases`, a list of strings containing words and phrases as "hints" so that the audio transcription is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, or to add additional words to the vocabulary for the transcription.

If successful, Scale will immediately return the generated task object, of which you should at least store the `task_id`.

The parameters `attachment_type`, `attachment`, `verbatim`, and `phrases` will be stored in the `params` object of the constructed `task` object.

<aside class="notice">
The maximum length of an audio file to be transcribed is 30 minutes, and we will only transcribe in English. Any audio file longer than that will return an error.
</aside>

### HTTP Request

`POST https://api.scaleapi.com/v1/task/audiotranscription`

### Parameters

Parameter | Type | Description
--------- | ---- | -------
`callback_url` | string | The full url (including the scheme `http://` or `https://`) of the callback when the task is completed. See the [Callback section](#callbacks) for more details about callbacks.
`instruction` (optional) | string | An markdown-enabled string specifying any special instructions for the audio transcription. You can use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to show examples, give structure to your instructions, and more.
`attachment` | string | A URL pointing to the audio file attachment.
`attachment_type` (optional, default `audio`) | string | Describes what type of file the attachment is. Only accepts `audio`.
`verbatim` (optional, default `false`) | boolean | Specifies whether or not to include non-words (ex: "um", "hm") in the transcript.
`phrases` (optional) | [string] | A list of strings containing words and phrases "hints" so that the audio transcription is more likely to recognize them. This can be used to improve the accuracy for specific words and phrases, or to add additional words to the vocabulary for the transcription.
`urgency` (optional, default `day`) | string | A string describing the urgency of the response. One of `immediate`, `day`, or `week`, where `immediate` is a one-hour response time.
`metadata` (optional, default `{}`) | object | A set of key/value pairs that you can attach to a task object. It can be useful for storing additional information about the task in a structured format.

## Callback Format

> Example callback sent on completion

```json
{
  "response": {
    "transcript": "The avocado is a pear-shaped fruit with leathery skin, smooth edible flesh, and a large stone.",
    "duration": 5.106188,
    "alignment": [
      { "word": "The", "start": 0.3, "end": 0.37, "confidence": 0.9 },
      { "word": "avocado", "start": 0.37, "end": 0.79, "confidence": 0.9 },
      { "word": "is", "start": 0.79, "end": 0.94, "confidence": 0.9 },
      { "word": "a", "start": 0.94, "end": 1, "confidence": 0.9 },
      { "word": "pear", "start": 1, "end": 1.3, "confidence": 0.3 },
      { "word": "shaped", "start": 1.3, "end": 1.59, "confidence": 0.3 },
      { "word": "fruit", "start": 1.59, "end": 1.8, "confidence": 0.9 },
      { "word": "with", "start": 1.81, "end": 2.01, "confidence": 0.9 },
      { "word": "leathery", "start": 2.01, "end": 2.37, "confidence": 0.9 },
      { "word": "skin", "start": 2.37, "end": 2.82, "confidence": 0.9 },
      { "word": "smooth", "start": 2.85, "end": 3.11, "confidence": 0.9 },
      { "word": "edible", "start": 3.19, "end": 3.53, "confidence": 0.9 },
      { "word": "flesh", "start": 3.53, "end": 3.88, "confidence": 0.9 },
      { "word": "and", "start": 3.88, "end": 4.02, "confidence": 0.9 },
      { "word": "a", "start": 4.02, "end": 4.06, "confidence": 0.9 },
      { "word": "large", "start": 4.06, "end": 4.37, "confidence": 0.9 },
      { "word": "stone", "start": 4.37, "end": 4.84, "confidence": 0.9 }
    ]
  },
  "task_id": "5774cc78b01249ab09f089dd",
  "task": {
    // populated task for convenience
    ...
  }
}
```

> Example callback body on error or issue

```json
{
  "response": {
    "error": "The audio file cannot be loaded."
  },
  "task_id": "5774cc78b01249ab09f089dd",
  "task": {
    // populated task for convenience
    ...
  }
}
```

The `response` object, which is part of the callback POST request and permanently stored as part of the task object, will have either an `error` field or a `transcript`, `duration`, and `alignment` field.

If the transcription was completed successfully, the transcript will be stored in plaintext under the `transcript` field. It will also contain a `duration` field, which stores the duration of the audio file in seconds.

Successful transcriptions will also include an `alignment` field, which will contain an array of aligned words (in the same order as the transcript), where each entry in the array has the following values:

* `word`: The word in question
* `start` : timestamp in the audio file at which this word begins
* `end` : timestamp in the audio file at which this word ends
* `confidence` : The confidence for this word's alignment. Currently confidences are always one of two values (0.9 or 0.3).

If there was an error or issue during transcription, the error will be detailed in the `error` field, and a partial transcript (if applicable) will be stored in the `transcript` field.

<aside class="notice">
See the <a href="#callbacks">Callback section</a> for more details about callbacks.
</aside>

# Callbacks

> The `callback_url` will be POSTed with `application/json` data of the following object form:

```json
{
  "task": {
    "task_id": "576c41bf13e36b0600b02b34",
    "completed_at": "2016-06-23T21:54:44.904Z",
    "response": {
      "category": "red"
    },
    "created_at": "2016-06-23T20:08:31.573Z",
    "callback_url": "http://www.example.com/callback",
    "type": "categorization",
    "status": "completed",
    "instruction": "Is this object red or blue?",
    "urgency": "day",
    "params": {
      "attachment_type": "text",
      "attachment": "tomato",
      "categories": [
        "red",
        "blue"
      ]
    },
    "metadata": {}
  },
  "response": {
    "category": "red"
  },
  "task_id": "576c41bf13e36b0600b02b34"
}
```

On your tasks, you will be required to supply a `callback_url`, a fully qualified URL that we will POST with the results of the task when completed. The data will be served as a JSON body (`application/json`). Alternately,
you can set a default callback URL in your profile, which will be used for tasks that do not specify one.

You should respond to the POST request with a 2xx status code. If we do not receive a 2xx status code, we will continue to retry up to 20 times over the course of the next 24 hours.

If we receive a 2xx status code, the task will be populated with a `true` value for the `callback_succeeded` parameter. Otherwise, if we do not recieve a 2xx status code on any retry, the task will be populated with a `false` value for the `callback_succeeded` parameter.

### Getting Started

We have sample callback server implementations, which you can deploy to Heroku in seconds, in the following languages:

* [Node.js](https://github.com/scaleapi/sample-callback-server-node)
* Python (coming soon!)

If you're just testing and want to try a few requests, the easiest way to get started is to use a [RequestBin](http://requestb.in/) and send requests using your `http://requestb.in/someHash` URL as the `callback_url`. You can also use [ngrok](https://ngrok.com/) to expose a local server to the internet for fast prototyping.

Feel free to [chat us on Slack](https://chat.scaleapi.com) or [email us](mailto:hello@scaleapi.com) if you have any trouble.

### Authentication

If you'd like to authenticate our callbacks, we set a `scale-callback-auth` HTTP header on each of our callbacks. The value will be equal to your `Live Callback Auth Key` shown on your dashboard. If this header is not set, or it is set incorrectly, the callback is not from Scale.

### POST Data

Attribute | Type | Description
--------- | ------- | -----------
`task_id` | string | The `task_id` is the unique identifier for the task.
`response` | object | The response object of the completed request. For `categorization`, it will contain a `category` attribute of the assigned category.
`task` | object | The full task object for reference and convenience.


# Task Endpoints

## Retrieve a Task

```shell
curl "https://api.scaleapi.com/v1/task/{task_id}" \
  -u "{{ApiKey}}:"
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')
task_id = 'YOUR_TASK_ID'

task = client.fetch_task(task_id)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

var task_id = 'YOUR_TASK_ID';

client.fetchTask(task_id, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

scale.tasks.find("58a63795aa9d139b20a42535")
=> #<Scale::Api::Tasks::Categorization:0x007fcc10978ab8 @task_id="58a63795aa9d139b20a42535", @type="categorization", @instruction="Is this company public or private?", @params={"attachment_type"=>"website", "attachment"=>"https://www.google.com", "categories"=>["public", "private"], "allow_multiple"=>false}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:53 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}, @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>>
```

> The above command returns an object structured like this:

```json
{
  "task_id": "576ba74eec471ff9b01557cc",
  "completed_at": "2016-06-23T09:10:02.798Z",
  "created_at": "2016-06-23T09:09:34.752Z",
  "callback_url": "http://www.example.com/callback",
  "type": "categorization",
  "status": "completed",
  "instruction": "Would you say this item is big or small?",
  "urgency": "day",
  "params": {
    "attachment_type": "text",
    "attachment": "car",
    "categories": [
      "big",
      "small"
    ]
  },
  "response": {
    "category": "big"
  },
  "metadata": {}
}
```

This endpoint retrieves a specific task.

### HTTP Request

`GET https://api.scaleapi.com/v1/task/{TASK_ID}`

### URL Parameters

Parameter | Description
--------- | -----------
`task_id` | The task_id of the task to retrieve

### Returns

Returns a task if a valid identifier was provided, and returns a 404 error otherwise.

## Cancel a task

```shell
curl -X POST "https://api.scaleapi.com/v1/task/{task_id}/cancel" \
  -u "{{ApiKey}}:"
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')
task_id = 'YOUR_TASK_ID'

task = client.cancel_task(task_id)
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

var task_id = 'YOUR_TASK_ID';

client.cancelTask(task_id, (err, task) => {
    // do something with task
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: '{{ApiKey}}')

canceled_task = scale.tasks.cancel("YOUR_TASK_ID") # Returns the appropriate Task object with status set to canceled
=> #<Scale::Api::Tasks::Categorization:0x007fcc1108b288 @task_id="58a63795aa9d139b20a42535", @type="categorization", @instruction="Is this company public or private?", @params={"attachment_type"=>"website", "attachment"=>"https://www.google.com", "categories"=>["public", "private"], "allow_multiple"=>false}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:53 UTC, @status="canceled", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}, @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>>

canceled_task.cancelled?
=> true
```

> The above command returns an object structured like this:

```json
{
  "task_id": "576ba74eec471ff9b01557cc",
  "created_at": "2016-06-23T09:09:34.752Z",
  "callback_url": "http://www.example.com/callback",
  "type": "categorization",
  "status": "canceled",
  "instruction": "Would you say this item is big or small?",
  "urgency": "week",
  "params": {
    "attachment_type": "text",
    "attachment": "car",
    "categories": [
      "big",
      "small"
    ]
  },
  "metadata": {}
}
```

This endpoint cancels a task so that it will not be completed.

You may only cancel pending tasks, and the endpoint will return a 500 error code if you attempt to cancel a completed task.

### HTTP Request

`POST https://api.scaleapi.com/v1/task/{TASK_ID}/cancel`

### URL Parameters

Parameter | Description
--------- | -----------
`task_id` | The task_id of the task to cancel

### Returns

Returns the canceled task if a valid identifier for a pending task was provided, and returns a 404 error or 500 error otherwise.

## List All Tasks

```shell
curl "https://api.scaleapi.com/v1/tasks" \
  -u "{{ApiKey}}:"
```

```python
import scaleapi

client = scaleapi.ScaleClient('{{ApiKey}}')
task_id = 'YOUR_TASK_ID'

# specify URL params as kwargs to tasks()
tasklist = client.tasks()
```

```javascript
var scaleapi = require('scaleapi');

var client = scaleapi.ScaleClient('{{ApiKey}}');

// specify URL parameters as properties in the params object
var params = {};
client.tasks(params, (err, tasklist) => {
    // do something with tasklist
});
```

```ruby
require 'scale'
scale = Scale.new(api_key: 'SCALE_API_KEY')

# You can pass params like start_time or end_time as keys to filter results
scale.tasks.where
=> #<Scale::Api::TaskList:0x007fcc11822a28 @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>, @docs=[#<Scale::Api::Tasks::Categorization:0x007fcc118227f8 @task_id="58a63795aa9d139b20a42535", @type="categorization", @instruction="Is this company public or private?", @params={"attachment_type"=>"website", "attachment"=>"https://www.google.com", "categories"=>["public", "private"], "allow_multiple"=>false}, @urgency="day", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:53 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}, @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>>], @limit=1, @offset=0, @has_more=true, @params={:start_time=>nil, :end_time=>nil, :limit=>1, :offset=>0, :status=>nil, :type=>nil}>
# Scale::Api::TaskList implements Enumerable, so it is Array-like.
```


> The above command returns an object structured like this:

```json
{
  "docs": [
    {
      "task_id": "576b998b4628d1bfaed7d3a4",
      "created_at": "2016-06-23T08:10:51.032Z",
      "callback_url": "http://www.example.com/callback",
      "type": "categorization",
      "status": "completed",
      "instruction": "Is this object big or small?",
      "urgency": "immediate",
      "params": {
        "attachment_type": "text",
        "attachment": "ant",
        "categories": [
          "big",
          "small"
        ]
      },
      "completed_at": "2016-06-23T19:36:23.084Z",
      "response": {
        "category": "small"
      },
      "metadata": {}
    },
    {
      "task_id": "576ba301eed30241b0e9bbf7",
      "created_at": "2016-06-23T08:51:13.903Z",
      "callback_url": "http://www.example.com/callback",
      "type": "categorization",
      "status": "completed",
      "instruction": "Is this object big or small?",
      "urgency": "day",
      "params": {
        "attachment_type": "text",
        "attachment": "T-Rex",
        "categories": [
          "big",
          "small"
        ]
      },
      "completed_at": "2016-06-23T09:09:10.108Z",
      "response": {
        "category": "big"
      },
      "metadata": {}
    }
  ],
  "total": 2,
  "limit": 100,
  "offset": 0,
  "has_more": false
}
```

This is a paged endpoint retrieves a list of your tasks. The tasks will be returned in descending order based on `created_at` time. The pagination is based on the `limit` and `offset` parameters, which determine the page size and how many results to skip.

### HTTP Request

`GET https://api.scaleapi.com/v1/tasks`

### URL Parameters

Parameter | Type | Description | Required
--------- | ---- | ----------- | --------
`start_time` | ISO 8601 Date | The minimum value of `created_at` for tasks to be returned | optional
`end_time`   | ISO 8601 Date | The maximum value of `created_at` for tasks to be returned | optional
`status`     | string | The status of the task - can be: `completed`, `pending`, or `canceled` | optional
`type`       | string | The type of the task - can be: `transcription`, `categorization`, `comparison`, `annotation`, `datacollection`, `audiotranscription`, or any other task type. | optional
`limit`      | integer | A number between 1 and 100, the maximum number of results to display per page | optional, default 100
`offset`     | integer | The number of results to skip, for showing the next page | optional, default 0

### Returns

Returns a list of your tasks.
