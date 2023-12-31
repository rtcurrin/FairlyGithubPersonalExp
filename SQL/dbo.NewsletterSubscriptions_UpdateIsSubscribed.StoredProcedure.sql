CREATE proc					[dbo].[NewsletterSubscriptions_UpdateIsSubscribed]
							@Email nvarchar(255)
							,@IsSubscribed bit
as
/*--TestCode

	DECLARE					@Email nvarchar(255) = 'LoveHumanshh463j@earthlink.net'
							,@IsSubscribed bit = 1

	SELECT TOP 100			[Email]
							,[IsSubscribed]
							,[DateCreated]
							,[DateModified]

	FROM					[dbo].[NewsletterSubscriptions]
	WHERE					Email = @Email

	EXECUTE					[dbo].[NewsletterSubscriptions_UpdateIsSubscribed]
							@Email
							,@IsSubscribed

	SELECT TOP 100			[Email]
							,[IsSubscribed]
							,[DateCreated]
							,[DateModified]

	FROM					[dbo].[NewsletterSubscriptions]
	WHERE					Email = @Email

	DECLARE					@IsUnSubscribed bit = 0

	EXECUTE					[dbo].[NewsletterSubscriptions_UpdateIsSubscribed]
							@Email
							,@IsUnSubscribed

*/

BEGIN

	DECLARE					@DateModified datetime2(7) = getutcdate()

	UPDATE					[dbo].[NewsletterSubscriptions]

	SET						[IsSubscribed] = @IsSubscribed
							,[DateModified] = @DateModified

	WHERE					Email = @Email

END
GO
