angular.module("app.controllers", []).controller('treeCheckboxController', function($scope) {
  const savedTreeData = JSON.parse(localStorage.getItem('savedTreeData'))
  $scope.tree = savedTreeData || [
    {
      label: 'Lenon Felippi',
      checked: true,
      isOpen: true,
      children: [],
    },
    {
      label: 'Richard Paul M.',
      checked: false,
      isOpen: true,
      children: [
        {
          label: 'Luis F. Doris',
          checked: false,
          isOpen: true,
          children: [
            {
              label: 'Maurice Rudolf Ludwig',
              checked: false,
              isOpen: true,
              children: [
                {
                  label: 'Joseph E. James A.',
                  checked: false,
                  isOpen: true,
                  children: [
                    {
                      label: 'Alan G. William',
                      checked: false,
                      isOpen: true,
                      children: [],
                    },
                  ],
                },
                {
                  label: 'Guglielmo Hendrik Antoon',
                  checked: false,
                  isOpen: true,
                  children: [],
                },
                {
                  label: 'Wladyslaw Stanislaw Ivar',
                  checked: false,
                  isOpen: true,
                  children: [],
                },
                {
                  label: 'Élie Melvin',
                  checked: false,
                  isOpen: true,
                  children: [],
                },
                {
                  label: 'Alvin E. Emil Theodor',
                  checked: false,
                  isOpen: true,
                  children: [],
                },
                {
                  label: 'Heike Norman E.',
                  checked: false,
                  isOpen: true,
                  children: [],
                },
              ],
            },
            {
              label: 'Kurt Dickinson W.',
              checked: false,
              isOpen: true,
              children: [],
            },
            {
              label: 'Finn E. May-Britt',
              checked: false,
              isOpen: true,
              children: [],
            },
            {
              label: 'James A. Shimon',
              checked: false,
              isOpen: true,
              children: [],
            },
          ],
        },
      ],
    },
  ];

  $scope.$watch('tree', function(newValue, oldValue) {
    if (newValue !== oldValue) {
      localStorage.setItem('savedTreeData', JSON.stringify(newValue));
    }
  }, true);
});
