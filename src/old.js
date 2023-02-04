import { TwitterApi } from 'twitter-api-v2';

// Instantiate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAP11lgEAAAAAmzqShDuitrxCSYOqOc925%2FOALic%3Db9o3xW6znUkVjryF1Dwu9asffI9zSalQjTHbqz90SArJwUsC1o');

// Tell typescript it's a readonly app
const client = twitterClient.readOnly;
const startTime = new Date(new Date().getTime() - 1000 * 60 * 60 * 24);
const result = await client.v2.tweetCountRecent('木村拓哉', {granularity: 'day', start_time: startTime.toISOString()});

console.log('total count:', result.meta.total_tweet_count);
// const counts = await client.v2.tweets(