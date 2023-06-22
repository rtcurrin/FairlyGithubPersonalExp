CREATE proc [dbo].[NewsletterSubscriptions_SelectAll_Subscribed]

as
/*--TestCode

	EXECUTE					[dbo].[NewsletterSubscriptions_SelectAll_Subscribed]

*/

BEGIN

	SELECT					[Email]
	FROM					[dbo].[NewsletterSubscriptions]
	WHERE					IsSubscribed = 1;

END
GO
