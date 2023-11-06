const {TweetRepository,HastagRepository}=require('../repository/index');

class TweetService{

        constructor(){
            this.tweetRepository=new TweetRepository();
            this.hastageRepository=new HastagRepository();
        }

        async create(data){
            const content=data.content;
            let tags=content.match(/#[a-zA-Z0-9_]+/g);
            tags=tags.map((tag)=>tag.substring(1));
            console.log(tags);
            const tweet= await this.tweetRepository.create(data);
            let alreadyPresentTags=await this.hastageRepository.findByName(tags);
            let PresentTagsTitle=alreadyPresentTags.map(tags => tags.title);
            let newTags=await tags.filter(tag=> !PresentTagsTitle.includes(tag));
            newTags = newTags.map(tag => {
                return {title: tag, tweets: [tweet.id]}
            });
            await this.hastageRepository.bulkCreate(newTags);
            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });
            return tweet;
        }
}

module.exports=TweetService;