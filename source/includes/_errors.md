# Errors

The Scale API uses the following HTTP codes:


Error Code | Meaning
---------- | -------
200 | OK -- Everything worked as expected.
400 | Bad Request -- The request was unacceptable, often due to missing a required parameter.
401 | Unauthorized -- No valid API key provided.
402 | Not enabled -- Please contact <a href="mailto:sales@scaleapi.com">sales@scaleapi.com</a> before creating this type of task.
404 | Not Found -- The requested resource doesn't exist.
429 | Too Many Requests -- Too many requests hit the API too quickly.
500 | Internal Server Error -- We had a problem with our server. Try again later.