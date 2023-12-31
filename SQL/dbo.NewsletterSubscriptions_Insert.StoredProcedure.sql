CREATE proc					[dbo].[NewsletterSubscriptions_Insert]
							@Email nvarchar(255)
							,@IsSubscribed bit
as
/*--TestCode

	SELECT TOP 100			[Email]
							,[IsSubscribed]
							,[DateCreated]
							,[DateModified]

	FROM					[dbo].[NewsletterSubscriptions]

	DECLARE					@Email nvarchar(255) = 'LoveHumansfwf24g4@earthlink.net'
							,@IsSubscribed bit = 0

	EXECUTE					[dbo].[NewsletterSubscriptions_Insert]
							@Email
							,@IsSubscribed

	SELECT TOP 100			[Email]
							,[IsSubscribed]
							,[DateCreated]
							,[DateModified]

	FROM					[dbo].[NewsletterSubscriptions]

*/

BEGIN


	INSERT INTO				[dbo].[NewsletterSubscriptions]
							([Email]
							,[IsSubscribed])

	VALUES					(@Email
							,@IsSubscribed)

END
GO
