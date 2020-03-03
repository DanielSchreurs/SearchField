//
//  SafariExtensionViewController.swift
//  SearchField Extension
//
//  Created by Daniel Schreurs on 03/03/2020.
//  Copyright © 2020 Daniel Schreurs. All rights reserved.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
