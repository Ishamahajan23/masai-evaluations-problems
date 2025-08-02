class Subscriber{
    update(postTitle){
        console.log("error");
    }
}

class Blog{
    constructor(){
        this.subscribers = [];

    }
    subscribe(subscriber){
       this.subscribers.push(subscriber);
    }
    unsubscribe(subscriber){
       this.subscribers = this.subscribers.filter(sub=>sub!==subscriber);
    }
    publish(postTitle){
       this.subscribers.forEach(subscriber=>{
         subscriber.update(postTitle)
       })
    }
}

class EmailSubscriber extends Subscriber{
    update(postTitle){
     console.log(`Email: New blog post titled ${postTitle}`)
    }
}
class SMSSubscriber extends Subscriber{
   update(postTitle){
    console.log(`SMS: New blog post titled ${postTitle}`)
   }
}

const blog = new Blog();

const emailSub = new EmailSubscriber();
const SMSSub = new SMSSubscriber();


blog.subscribe(emailSub);
blog.subscribe(SMSSub);

blog.publish(" 'Design Patterns in JavaScript' ");
blog.publish(" 'Observer Pattern Simplified' ");

