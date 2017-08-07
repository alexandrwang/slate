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
