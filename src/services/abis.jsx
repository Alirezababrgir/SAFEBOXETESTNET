export const Contract_address = "0xc58f3C8108a6feeb9aB9B6fd47D31822cA3aC2eD";
export const Contract_abi =  "[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint8\",\"name\":\"packageNo\",\"type\":\"uint8\"}],\"name\":\"PackagePurchaesd\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint48\",\"name\":\"uid\",\"type\":\"uint48\"}],\"name\":\"UserRegistered\",\"type\":\"event\"},{\"stateMutability\":\"nonpayable\",\"type\":\"fallback\"},{\"inputs\":[],\"name\":\"amIMember\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"_isMember\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_packageNo\",\"type\":\"uint8\"}],\"name\":\"buyPckage\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"changeOwner\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"checkInctive\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"continueDailyPayment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"continueDailyPaymentEmergency\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"continueMonthlyPayment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"continueMonthlyPaymentEmergency\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint48\",\"name\":\"_userUid\",\"type\":\"uint48\"}],\"name\":\"getAddressByUid\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"}],\"name\":\"getAdmin\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBestShareSum\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBinaryShareSum\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBrokerShareSum\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDelegatedAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastPaymentStarted\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastPaymentTime\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLastShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMlmShareSum\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyBenefit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_receipt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_remainedReceipt\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_filled\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_inactive\",\"type\":\"bool\"},{\"internalType\":\"uint40\",\"name\":\"_inactiveTime\",\"type\":\"uint40\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyBestState\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"_state\",\"type\":\"uint8\"},{\"internalType\":\"uint256\",\"name\":\"_allHandSales\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_smallHandSales\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_tenLevelSales\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_remainedAllHandSalesTo10K\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_remainedSmallHandSalesTo3K\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_gapToNextScore\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_poolBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_lastSahreValue\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyBinaryState\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_smallHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_lastBalancePaid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_gapToNextBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_poolBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_lastShareValue\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyChildrenBenefit\",\"outputs\":[{\"components\":[{\"internalType\":\"uint48\",\"name\":\"_uid\",\"type\":\"uint48\"},{\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_receipt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_remainedReceipt\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_filled\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_inactive\",\"type\":\"bool\"},{\"internalType\":\"uint40\",\"name\":\"_inactiveTime\",\"type\":\"uint40\"}],\"internalType\":\"struct UserReport.Benefit[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyChildrenSales\",\"outputs\":[{\"components\":[{\"internalType\":\"uint48\",\"name\":\"_uid\",\"type\":\"uint48\"},{\"internalType\":\"uint40\",\"name\":\"_tenLevelChildrenCount\",\"type\":\"uint40\"},{\"internalType\":\"uint40\",\"name\":\"_allLevelChildrenCount\",\"type\":\"uint40\"},{\"internalType\":\"uint256\",\"name\":\"_tenLevelSales\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_allLevelSales\",\"type\":\"uint256\"}],\"internalType\":\"struct UserReport.Sales[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyChilrden\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyChilrdenUids\",\"outputs\":[{\"internalType\":\"uint48[]\",\"name\":\"\",\"type\":\"uint48[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyData\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_referralAddress\",\"type\":\"address\"},{\"internalType\":\"uint48\",\"name\":\"_userUid\",\"type\":\"uint48\"},{\"internalType\":\"uint48\",\"name\":\"_referralUid\",\"type\":\"uint48\"},{\"internalType\":\"uint16\",\"name\":\"_childrenCount\",\"type\":\"uint16\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyHandsBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_smallHandBalance\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMyMlmBlockingState\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_smallHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_allHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_blockState\",\"type\":\"uint8\"},{\"internalType\":\"uint40\",\"name\":\"_blockedTime\",\"type\":\"uint40\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMySales\",\"outputs\":[{\"internalType\":\"uint40\",\"name\":\"_tenLevelChildrenCount\",\"type\":\"uint40\"},{\"internalType\":\"uint40\",\"name\":\"_allLevelChildrenCount\",\"type\":\"uint40\"},{\"internalType\":\"uint256\",\"name\":\"_tenLevelSales\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_allLevelSales\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMySalesPerLevel\",\"outputs\":[{\"components\":[{\"internalType\":\"uint8\",\"name\":\"_level\",\"type\":\"uint8\"},{\"internalType\":\"uint40\",\"name\":\"_usersCount\",\"type\":\"uint40\"},{\"internalType\":\"uint256\",\"name\":\"_paymentSum\",\"type\":\"uint256\"}],\"internalType\":\"struct UserReport.LevelSales[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMySupportState\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_bigHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_smallHandBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_lastBalancePaid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_gapToNextBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_poolBalance\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_lastShareValue\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"_packageNo\",\"type\":\"uint8\"}],\"name\":\"getPackage\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxRevenue\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"_mlmSharePercent\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_binarySharePercent\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_bestSharePercent\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_supportSharePercent\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_brokerSharePercent\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_traderMaxBenefit\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_traderUserSharePercent\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_traderForexBotSharePercent\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"_traderReferralSharePercent\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPackagesCount\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getSupportShareSum\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"getUidByAddress\",\"outputs\":[{\"internalType\":\"uint48\",\"name\":\"\",\"type\":\"uint48\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"getUserBenefit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"_payment\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_receipt\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_remainedReceipt\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"_filled\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"_inactive\",\"type\":\"bool\"},{\"internalType\":\"uint40\",\"name\":\"_inactiveTime\",\"type\":\"uint40\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAccount\",\"type\":\"address\"}],\"name\":\"getUserChilrden\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAccount\",\"type\":\"address\"}],\"name\":\"getUserChilrdenUids\",\"outputs\":[{\"internalType\":\"uint48[]\",\"name\":\"\",\"type\":\"uint48[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAccount\",\"type\":\"address\"}],\"name\":\"getUserData\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"_referral\",\"type\":\"address\"},{\"internalType\":\"uint48\",\"name\":\"_uid\",\"type\":\"uint48\"},{\"internalType\":\"uint16\",\"name\":\"_childrenCount\",\"type\":\"uint16\"},{\"internalType\":\"uint40\",\"name\":\"_level\",\"type\":\"uint40\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_userAddress\",\"type\":\"address\"}],\"name\":\"getUserSales\",\"outputs\":[{\"internalType\":\"uint40\",\"name\":\"_tenLevelChildrenCount\",\"type\":\"uint40\"},{\"internalType\":\"uint40\",\"name\":\"_allLevelChildrenCount\",\"type\":\"uint40\"},{\"internalType\":\"uint256\",\"name\":\"_tenLevelSales\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_allLevelSales\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUsersCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lockProxy\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"}],\"name\":\"newAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"play\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint48\",\"name\":\"_referralUid\",\"type\":\"uint48\"},{\"internalType\":\"uint8\",\"name\":\"_packageNo\",\"type\":\"uint8\"}],\"name\":\"registerUser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"}],\"name\":\"removeAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_delegatedAddress\",\"type\":\"address\"}],\"name\":\"setDelegatedAddress\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startDailyPayment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startDailyPaymentEmergency\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startMonthlyPayment\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startMonthlyPaymentEmergency\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]";

export const USDT_address = "0x449AF8A982d45356eF967954dec64307826D68ad";
export const USDT_abi = "[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PAUSER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"RemoveMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"RemovePauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addPauser\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"mintPublic\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"
