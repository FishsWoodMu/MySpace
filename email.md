```c#
Joanna,
WAIT.
They may do it. I will get back to you.

Marty

Marty Greenwald
Greenwald Seafood Brokerage, Inc.
greenwaldmarty2@gmail.com <mailto:greenwaldmarty2@gmail.com> 
951-317-3717


On 11/12/2024 2:40 PM, Marty Greenwald wrote:


	Joanna,
	I''m sorry, best they can do is on week of 12/11 for $11.86 delivered.
	
	Marty
	
	
	
	Marty Greenwald
	Greenwald Seafood Brokerage, Inc.
	greenwaldmarty2@gmail.com <mailto:greenwaldmarty2@gmail.com> 
	951-317-3717


	On 11/12/2024 2:10 PM, seafood@sjfood.com <mailto:seafood@sjfood.com>  wrote:
	

		Hi Marty,

		 

		Prices are closer to each other, any chance to do $11.40/lb del in the week of 12/11. 

		 

		 

		Best Regards

		Purchasing Department

		 

		From: seafood@sjfood.com <mailto:seafood@sjfood.com>  [mailto:seafood@sjfood.com] 
		Sent: Tuesday, November 12, 2024 1:45 PM
		To: greenwaldmarty2@gmail.com <mailto:greenwaldmarty2@gmail.com> 
		Subject: RE: 8up opilio snow crab, Canada

		 

		Hi Marty,

		 

		Yeah, 12/11. Still be $11.86 del?

		 

		 

		Best Regards

		Purchasing Department

		 

		 

		 

		From: Marty Greenwald [mailto:greenwaldmarty2@gmail.com] 
		Sent: Tuesday, November 12, 2024 11:24 AM
		To: seafood@sjfood.com <mailto:seafood@sjfood.com> 
		Subject: Re: 8up opilio snow crab, Canada

		 
   标题：8up opilio snow crab,Canda
		Hi Joanna,
		1 load of 8/up Luxury brand Canadian Opilio
		$11.86 delivered.
		
		Also, did you mean 12/11?
		
		Regards,
		Marty

		Marty Greenwald
		Greenwald Seafood Brokerage, Inc.
		greenwaldmarty2@gmail.com <mailto:greenwaldmarty2@gmail.com> 
		951-317-3717

		 

		On 11/12/2024 12:29 AM, seafood@sjfood.com <mailto:seafood@sjfood.com>  wrote:

			Hi Marty,
			
			We are looking for 1 load of 8up opilio snow crab, Canada, del to Indiana in the week of 11/11. Pls help quote and advise the brand of it. Thank you!
			
			
			Best Regards
			Purchasing Department
```

```

TILAPIA PRODUCT OF CHINA : 

Tilapia fillet bulk 2/3 IQF $2.59

3/5 IQF $2.75

5/7 IQF  $2.89

Tilapia fillet 3/5 IVP $2.79

5/7 IVP $2.89

7/9 IVP $3.15

Tilapia GS, 350/550 $1.69

550/750 $1.79

750up $1.89

loligo squid tube only 5/8 (please advise origin)  COSTAR INDIA $3.89

 

 

From: seafood@sjfood.com <seafood@sjfood.com> 
Sent: Monday, November 4, 2024 5:08 PM
To: Robert Guillen <robert@ranchofoods.com>
Subject: RE: Quotation

 

Hi Robert,

 

Any news?

 

 

Best Regards

Purchasing Department

 

 

From: seafood@sjfood.com <mailto:seafood@sjfood.com>  <seafood@sjfood.com <mailto:seafood@sjfood.com> > 
Sent: Sunday, November 3, 2024 11:38 PM
To: robert@ranchofoods.com <mailto:robert@ranchofoods.com> 
Subject: Quotation

 

Hi Robert,

 

Could you please help to quote below items?

 

Tilapia fillet bulk pack 2/3, 3/5, 5/7

Tilapia fillet IVP 3/5, 5/7, 7/9

Tilapia GS, 350/550, 550/750, 750up

loligo squid tube only 3/5&5/8 (please advise origin)

 

 

 

Best Regards

Purchasing Department
```

```
标题：Unagi price

Hello Sander,

	Saturday Brand price until next market change.

	10oz- $180

	11oz - $166

	12oz - $148

	14oz - $140

	 

	 

	 

	 

	***NOTE*** Our mailing address has changed, please update to: PO BOX 243 CUPERTINO, CA 95014

	 

	*** please exchange pallets on all orders, otherwise $21 per pallet***

	 

	Jason Cao

	Ande Foods (USA) Inc.,

	PO BOX 243

	Cupertino, CA 95014

	Tel:408-983-0988

	Fax:408-983-0788

	Cell:408-806-10331
	
	
```

```
   [Fact]
    public async Task test()
    {
        await RunWithUnitOfWork<IRepository>(async repository =>
        {
            await repository.InsertAllAsync(new List<WarehouseMm530Materiel>()
            {
                new()
                {
                    Code = "123"
                },
                new()
                {
                    Code = "321"
                },
                new()
                {
                    Code = "111"
                },
            });
        });
        
        await RunWithUnitOfWork<IRepository>(async repository =>
        {
            var isMaterialCode = await repository.Query<WarehouseMm530Materiel>().AnyAsync(x => x.Code == "111").ConfigureAwait(false);
            
            isMaterialCode.ShouldBeTrue();
        });
    }
```

```
"你是一个对食品名称有高度理解能力的人工智能，请根据我发送的文本信息提取出食品名称，并尽可能提取完整的报价或规格信息。" 
                                   "根据规则处理以下内容：\n\n- " 
                                   "仅当文本中提到食品的具体报价、规格或其他有效信息时，才会提取食品名称。如果上下文中只提及了食品名而没有任何其他信息（如报价、规格等），**不需要提取该产品信息**。\n- " 
                                   "如果能够提取到 `productName` 但没有明确的报价或规格信息，请直接将 `productInfo` 设为 `productName`。\n\n" 
                                   "字段说明：\n- " 
                                   "`quoteProductNames`：包含所有有效食品名称及其对应的报价和规格信息。\n- `" 
                                   "productName`：文本中提取到的食品名称。\n- `" 
                                   "productInfo`：食品的详细信息，例如型号、规格、重量、报价等。\n\n" 
                                   "特别注意：\n- " 
                                   "如果文本中只是提到某种食品（如“Chum salmon fillet”），但没有其他相关信息（例如报价、规格），则不应提取该产品。"
                                   "特别注意的是，你的每个回复都必须按照样本“输出”二字后面的json格式，不要有其他字眼。\n " 

```

