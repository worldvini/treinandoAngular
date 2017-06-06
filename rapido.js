if (!window.sessionStorage.getItem('uolet:application:token') ){
    if(!window.sessionStorage.getItem('uolet:application:apiEndPoint')){
        if(!window.sessionStorage.getItem('uolet:application:client_id'))
            $scope.errorMessage = 'Token, Api Endpoint e Client ID'
        else
            $scope.errorMessage = 'Token, Api Endpoint'

    }else if(!window.sessionStorage.getItem('uolet:application:client_id'))
        $scope.errorMessage = 'Token e Client ID'
    else
        $scope.errorMessage = 'Token'    

}else if (!window.sessionStorage.getItem('uolet:application:apiEndPoint')){
    if(!window.sessionStorage.getItem('uolet:application:client_id'))
        $scope.errorMessage = 'Client ID e Api Endpoint'
    else    
        $scope.errorMessage = 'api Endoint'        
}else 
    $scope.errorMessage = 'Client ID' 