public interface INewsletterSubscriptionService
{
	void AddNewsletterSubscription(NewsletterSubscriptionAddRequest model);

	Paged<NewsletterSubscription> GetAllNewsletterSubscriptions(int filterMode, int pageIndex, int pageSize);

	List<string> GetSubscriberEmails();

	NewsletterSubscription GetSubscriptionByEmail(string email);

	void UpdateNewsletterSubscription(NewsletterSubscriptionAddRequest model);

}