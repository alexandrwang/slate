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
=> #<Scale::Api::Tasks::Categorization:0x007fcc10978ab8 @task_id="58a63795aa9d139b20a42535", @type="categorization", @instruction="Is this company public or private?", @params={"attachment_type"=>"website", "attachment"=>"https://www.google.com", "categories"=>["public", "private"], "allow_multiple"=>false}, @urgency="standard", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:53 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}, @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>>
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
  "urgency": "standard",
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
=> #<Scale::Api::Tasks::Categorization:0x007fcc1108b288 @task_id="58a63795aa9d139b20a42535", @type="categorization", @instruction="Is this company public or private?", @params={"attachment_type"=>"website", "attachment"=>"https://www.google.com", "categories"=>["public", "private"], "allow_multiple"=>false}, @urgency="standard", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:53 UTC, @status="canceled", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}, @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>>

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
  "urgency": "standard",
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
=> #<Scale::Api::TaskList:0x007fcc11822a28 @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>, @docs=[#<Scale::Api::Tasks::Categorization:0x007fcc118227f8 @task_id="58a63795aa9d139b20a42535", @type="categorization", @instruction="Is this company public or private?", @params={"attachment_type"=>"website", "attachment"=>"https://www.google.com", "categories"=>["public", "private"], "allow_multiple"=>false}, @urgency="standard", @response=nil, @callback_url="http://www.example.com/callback", @created_at=2017-02-16 23:36:53 UTC, @status="pending", @completed_at=nil, @callback_succeeded_at=nil, @metadata={}, @client=#<struct Scale::Api api_key="live_358440e50ba277654e847a079eda9614", callback_auth_key=nil, default_request_params={:callback_url=>nil}, logging=false>>], @limit=1, @offset=0, @has_more=true, @params={:start_time=>nil, :end_time=>nil, :limit=>1, :offset=>0, :status=>nil, :type=>nil}>
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
      "urgency": "express",
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
      "urgency": "standard",
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
