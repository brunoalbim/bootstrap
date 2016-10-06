(function(angular) {
	angular.module('ExampleApp').service('TransferService', ['$q', TransferService]);

	function TransferService($q) {
		this.list = function(filters) {
			var transfers = this.transfers;
			angular.forEach(filters, function(filterValue, filterKey) {
				transfers = transfers.filter(function(transfer) {
					if (angular.isArray(filterValue)) {
						return transfer[filterKey] &&
							filterValue.indexOf(transfer[filterKey]) >= 0
					} else {
						return transfer[filterKey] === filterValue;
					}
				});
			});
			return $q.when(transfers);
		};

		this.transfers = [{
			id: 1,
			type: "REQUEST",
			source: "GBP",
			target: "USD",
			fixed: "RATE",
			sourceAmount: 10.00,
			targetAmount: 12.34,
			sourceAccount: {
				name: "Mike Marter",
				shortString: "Account ending 1234"
			},
			targetAccount: {
				name: "Steve Pole",
				shortString: "Account ending 1234"
			},
			status: "PAUSED",
			reason: "We received your money. There was a problem with your documents.",
			reference: "Ref123",
			fee: 0.50,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
		},{
			id: 2,
			type: "TRANSFER",
			source: "GBP",
			target: "USD",
			fixed: "TARGET",
			sourceAmount: 10.00,
			targetAmount: 12.34,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "USD balance"
			},
			status: "PROCESSING",
			reason: "We received your money. We're processing your transfer.",
			reference: "Ref123",
			fee: 0.50,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
		},{
			id: 3,
			type: "TRANSFER",
			source: "GBP",
			target: "USD",
			fixed: "SOURCE",
			sourceAmount: 10.00,
			targetAmount: 12.34,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "USD balance"
			},
			status: "CONVERTING",
			reason: "Converting",
			reference: "Ref123",
			fee: 5.50,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
		},{
			id: 4,
			type: "TRANSFER",
			source: "GBP",
			target: "USD",
			fixed: "SOURCE",
			sourceAmount: 10.00,
			targetAmount: 12.34,
			sourceAccount: {
				name: "Steve Pole",
				type: "ACCOUNT",
				shortString: "Account ending 9876"
			},
			targetAccount: {
				name: "Mike Marter",
				shortString: "Account ending 1234"
			},
			status: "AWAITING_FUNDS",
			reason: "Waiting for you to pay in.",
			reference: "Ref123",
			fee: 0.50,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
			batch: 1
		},{
			id: 5,
			type: "TRANSFER",
			source: "GBP",
			target: "USD",
			fixed: "SOURCE",
			sourceAmount: 10000000.00,
			targetAmount: 12345000.00,
			sourceAccount: {
				name: "Steve Pole",
				type: "ACCOUNT",
				shortString: "Account ending 9876"
			},
			targetAccount: {
				name: "Mike Marter",
				shortString: "Account ending 1234"
			},
			status: "FUNDED",
			reason: "We're waiting for your money to arrive in our account.",
			reference: "Ref123",
			fee: 50.00,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
			batch: 1
		},{
			id: 6,
			type: "TRANSFER",
			source: "GBP",
			target: "USD",
			fixed: "SOURCE",
			sourceAmount: 100.00,
			targetAmount: 123.45,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debite card ending 4321"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "ACCOUNT",
				shortString: "Account ending 1234"
			},
			status: "PAID_OUT",
			reason: "We've sent out your money, it may take some time to arrive in the account.",
			reference: "Ref123",
			fee: 0.50,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
			completed: "2016-07-01T12:34:56Z"
		},{
			id: 7,
			type: "TRANSFER",
			source: "GBP",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 2.50,
			targetAmount: 2.50,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Peet's coffee",
				type: "MERCHANT",
				shortString: "Merchant account"
			},
			status: "COMPLETED",
			reference: "Ref123",
			fee: 0.00,
			rate: 1.0000,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
			completed: "2016-07-01T12:34:56Z"
		},{
			id: 8,
			type: "REQUEST",
			source: "GBP",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 2.50,
			targetAmount: 2.50,
			sourceAccount: {
				name: "Kish Patel",
				type: "ACCOUNT",
				shortString: "Account ending 1234"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "GBP balance"
			},
			status: "COMPLETED",
			reference: "Ref123",
			fee: 0.00,
			rate: 1.0000,
			created: "2016-06-12T12:34:56Z",
			updated: "2016-06-12T12:34:56Z",
			completed: "2016-06-12T12:34:56Z"
		},{
			id: 9,
			type: "TRANSFER",
			source: "GBP",
			target: "EUR",
			fixed: "SOURCE",
			sourceAmount: 10000000.00,
			targetAmount: 11987000.00,
			sourceAccount: {
				name: "Steve Pole",
				type: "ACCOUNT",
				shortString: "Account ending 9876"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "ACCOUNT",
				shortString: "Account ending 1234"
			},
			status: "CANCELLED",
			reference: "NewHouse",
			fee: 500.00,
			rate: 1.1987,
			created: "2016-06-09T12:34:56Z",
			updated: "2016-06-10T12:34:56Z"
		},{
			id: 10,
			type: "TRANSFER",
			source: "GBP",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 100.00,
			targetAmount: 100.00,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "GBP balance"
			},
			status: "COMPLETED",
			reference: "Ref123",
			fee: 0.00,
			rate: 1.0000,
			created: "2016-03-30T12:34:56Z",
			updated: "2016-04-01T12:34:56Z",
			completed: "2016-04-01T12:34:56Z"
		},{
			id: 11,
			type: "TRANSFER",
			source: "EUR",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 100.00,
			targetAmount: 91.23,
			sourceAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "EUR balance"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "GBP balance"
			},
			status: "COMPLETED",
			reference: "Ref123",
			fee: 0.50,
			rate: 0.9123,
			created: "2016-03-30T12:34:56Z",
			updated: "2016-04-01T12:34:56Z",
			completed: "2016-04-01T12:34:56Z"
		},{
			id: 12,
			type: "REWARD",
			source: "GBP",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 10.00,
			targetAmount: 10.00,
			sourceAccount: {
				name: "TransferWise",
				type: "WALLET",
				shortString: "Referral program"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "GBP balance"
			},
			status: "COMPLETED",
			reference: "Referral Bonus",
			fee: 0.00,
			rate: 1.0000,
			created: "2016-03-30T12:34:56Z",
			updated: "2016-04-01T12:34:56Z",
			completed: "2016-04-01T12:34:56Z"
		}];

		/*
		{
			id: 2,
			type: "TOPUP",
			source: "GBP",
			target: "USD",
			fixed: "SOURCE",
			sourceAmount: 10.00,
			targetAmount: 12.34,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "USD balance"
			},
			status: "PROCESSING",
			reason: "We received your money. We're processing your transfer.",
			reference: "Ref123",
			fee: 0.50,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
		},{
			id: 3,
			type: "TOPUP",
			source: "GBP",
			target: "USD",
			fixed: "SOURCE",
			sourceAmount: 10.00,
			targetAmount: 12.34,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "USD balance"
			},
			status: "CONVERTING",
			reason: "Converting",
			reference: "Ref123",
			fee: 5.50,
			rate: 1.2345,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
		},{
			id: 7,
			type: "CARD",
			source: "GBP",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 2.50,
			targetAmount: 2.50,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Peet's coffee",
				type: "MERCHANT",
				shortString: "Merchant account"
			},
			status: "COMPLETED",
			reference: "Ref123",
			fee: 0.00,
			rate: 1.0000,
			created: "2016-06-30T12:34:56Z",
			updated: "2016-07-01T12:34:56Z",
			completed: "2016-07-01T12:34:56Z"
		},{
			id: 10,
			type: "TOPUP",
			source: "GBP",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 100.00,
			targetAmount: 100.00,
			sourceAccount: {
				name: "Steve Pole",
				type: "CARD",
				shortString: "Debit card ending 4321"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "GBP balance"
			},
			status: "COMPLETED",
			reference: "Ref123",
			fee: 0.00,
			rate: 1.0000,
			created: "2016-03-30T12:34:56Z",
			updated: "2016-04-01T12:34:56Z",
			completed: "2016-04-01T12:34:56Z"
		},{
			id: 11,
			type: "CONVERSION",
			source: "EUR",
			target: "GBP",
			fixed: "SOURCE",
			sourceAmount: 100.00,
			targetAmount: 91.23,
			sourceAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "EUR balance"
			},
			targetAccount: {
				name: "Steve Pole",
				type: "WALLET",
				shortString: "GBP balance"
			},
			status: "COMPLETED",
			reference: "Ref123",
			fee: 0.50,
			rate: 0.9123,
			created: "2016-03-30T12:34:56Z",
			updated: "2016-04-01T12:34:56Z",
			completed: "2016-04-01T12:34:56Z"
		},
		*/
	}
})(window.angular);