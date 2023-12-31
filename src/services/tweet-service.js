import {TweetRepository,HashtagRepository} from '../repository/index.js';

class TweetService{

        constructor(){
            this.tweetRepository=new TweetRepository();
            this.hashtageRepository=new HashtagRepository();
        }

        async create(data){
            console.log("Data is",data);
            const content=data.content;
            const tags=content.match(/#[a-zA-Z0-9_]+/g)
                        .map((tag)=>tag.substring(1).toLowerCase());
                        
            const tweet= await this.tweetRepository.create(data);
            let alreadyPresentTags=await this.hashtageRepository.findByName(tags);
            let PresentTagsTitle=alreadyPresentTags.map(tags => tags.title);
            let newTags=await tags.filter(tag=> !PresentTagsTitle.includes(tag));
            newTags = newTags.map(tag => {
                return {title: tag, tweets: [tweet.id]}
            });
            await this.hashtageRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        }
}

export default TweetService;