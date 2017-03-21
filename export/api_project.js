define({
  "name": "Lassie API Documentation",
  "version": "1.1.0",
  "description": "The Lassie API implementation allows external systems to communicate with Lassie to get, add, delete or synchronize various types of data.",
  "title": "Lassie API Documentation",
  "url": "http://lassie.example.com/",
  "sampleUrl": "http://188.166.115.34/dev/",
  "header": {
    "title": "Getting Started",
    "content": "<h1>Introduction</h1>\n<p>The Lassie API application enables a set of external systems to get, create, edit, delete and synchronize data from various sources in the Lassie system. For example, you can request which events are open for subscriptions, get which bartenders are checked into the Bar Module or perform transactions.</p>\n<h2>API Types</h2>\n<p>Each <code>api_key</code> has a single type giving rights to specific functionality within the API. You need to create multiple keys if an application needs multiple types. There are a total of four types:</p>\n<ol>\n<li><b>Model API.</b> A Model API is able to request data directly from methods allocated in the data structure classes of Lassie. Rights to do this should be enabled for each individual method. Managing these rights is done in the API Rights Section of the Rights Module by one of the administrators of Lassie.</li>\n<li><b>Person API.</b> A Person API is able to get and update person specific information, such as addresses, emails, payments, etc. This API Key is linked to one specific person ID limiting it to the information of one person.</li>\n<li><b>Person Auth API.</b> The Person Auth API enables you to create new Person API Keys. Most of the time Person API’s are created through logging into an app that need to show personal data. With a Person Auth API Key you can authorize such an app to login persons, get new Person API Keys and fetch their data. This way you only allow apps to handle person logins you trust.</li>\n<li><b>Person Management API.</b> The Person Management API allows you to create new person records and update existing information. Please note that this API has access to all the personal information.</li>\n<li><b>Transaction API.</b> A Transaction API is meant to send transactional data to Lassie. This API Key gives rights to transactional functionalities for a single Transaction Module (e.g. Bar or Shop Module). You can fetch the current products, product categories, transaction types (e.g. PIN / Cash). This information can then be used to post a transaction to Lassie.</li>\n</ol>\n<h2>Getting an API Key</h2>\n<p>You should contact one of the administrators of your Lassie system to get a new API Key for one or more of the above types. Distribution of the credentials is the responsibility of your own and should be handled carefully.</p>\n<h1>Performing Requests</h1>\n<p>The credentials you receive from the administrator of your Lassie system consist of an <code>api_key</code> and <code>api_secret</code>. The <code>api_key</code> is used to identify your application and the <code>api_secret</code> is used to hash or sign parts of your requests to verify that the sender is truly the source Lassie expects it to be. With each request you need to send an <code>api_hash</code> representing a mix of your <code>api_key</code>, <code>api_secret</code> and a piece of content to verify your credentials.</p>\n<h2>Libraries</h2>\n<p>Several Lassie API Libraries have been written for a variety of programming languages to speed up your development a bit. You should carefully read through the rest of this chapter on how to perform requests if these libraries don't support your development platform.</p>\n<p>Available libraries (under construction):</p>\n<ol>\n<li>PHP</li>\n<li>Java</li>\n<li>Android</li>\n<li>iOS</li>\n<li>Python</li>\n<li>Arduino</li>\n<li>ESP 8266 / 3212</li>\n</ol>\n<h2>Request Structure</h2>\n<p>All requests have a set of required parameters that should be found in the <code>query</code> or <code>post</code> parameters (depending on the request):</p>\n<ol>\n<li><code>api_key</code>. The public API key used for identifying the application and defining which rights should be associated with it.</li>\n<li><code>api_hash</code>. A HMAC SHA256 BASE64 hash of a piece of content combined with the <code>api_key</code> and the <code>api_secret</code>. The server will create the same hash with its own stored <code>api_secret</code> to see whether the provided <code>api_hash</code> matches this hash.</li>\n<li><code>api_hash_content</code>. A (random) piece of content that has been hashed along with the <code>api_key</code> and the <code>api_secret</code>. It is important to note that this random piece of content can only be used for one request per API Key. This means you will need to find a way in your application to create a new piece of content for each request where you are sure of its uniqueness. It is advised to use timestamps (possibly with microseconds) or randomly seeding an analog pin when working with a microcontroller.</li>\n</ol>\n<p>Example of the required parameters:</p>\n<pre><code>{\n  &quot;api_key&quot;: &quot;6fef96409095ac681a2f7e5baa07a7c1&quot;,\n  &quot;api_hash&quot;: &quot;51aeff8712ff502bf3c2df71025ad2d3&quot;,\n  &quot;api_hash_content&quot;: &quot;149394939&quot;\n}\n</code></pre>\n<p>There are some parameters that are not required, but might come in handy for you:</p>\n<ol>\n<li><code>format</code>. Specifies in which format you want to receive a response.\nOptions are: <code>json</code>, <code>xml</code>, <code>html</code>, <code>csv</code>, <code>jsonp</code>, <code>php</code> and <code>serialized</code>.</li>\n</ol>\n<p>Example output for <code>json</code>:</p>\n<pre><code>{\n  &quot;id&quot;: 1,\n  &quot;name&quot;: &quot;example&quot;\n}\n</code></pre>\n<p>Example output for <code>xml</code>:</p>\n<pre><code>&lt;element&gt;\n    &lt;id&gt;1&lt;/id&gt;\n    &lt;name&gt;example&lt;/name&gt;\n&lt;/element&gt;\n</code></pre>\n<h2>Hash Calculations</h2>\n<p>The implementation to determine the <code>api_hash</code> might vary per programming language, but here we will briefly specify what is expected.</p>\n<p>You should perform a <code>hmac</code> hash with <code>sha256</code> as the algorithm. The input content should consist of a concatenation of your public <code>api_key</code> and the <code>api_hash_content</code> separated with a colon (':'). The output hash should finally be converted to a <code>base64</code> string to make sure it can be included into an URL.</p>\n<p>Example methods for PHP implementation:</p>\n<pre><code>base64_encode(hash_hmac('sha256', $api_key .':'. $api_hash_content, $api_secret));\n</code></pre>\n"
  },
  "footer": {
    "title": "Suggestions",
    "content": "<h1>Suggestions</h1>\n<p>Please contact bureau [at] moeilijkedingen.nl if you have any suggestions for this API.</p>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true,
    "forceLanguage": "en"
  },
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2017-03-13T15:55:13.599Z",
    "url": "http://apidocjs.com",
    "version": "0.15.1"
  }
});